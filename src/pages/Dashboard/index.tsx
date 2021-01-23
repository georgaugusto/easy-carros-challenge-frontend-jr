import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';

import api from '../../services/api';

import Car from '../../components/Car';
import ModalAddCar from '../../components/ModalAddCar';
import ModalEditCar from '../../components/ModalEditCar';

import { CarsContainer, CarsHeader } from './styles';

interface ICar {
  id: number;
  licensePlate: string;
  servicesPerformed: string;
  schedulingDate: string;
  executionDate: string;
  available: boolean;
}

const Dashboard: React.FC = () => {
  const [cars, setCars] = useState<ICar[]>([]);
  const [editingCar, setEditingCar] = useState<ICar>({} as ICar);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    async function loadCars(): Promise<void> {
      const response = await api.get('/cars');

      setCars(response.data);
    }

    loadCars();
  }, []);

  async function handleAddCar(
    car: Omit<ICar, 'id' | 'available'>,
  ): Promise<void> {
    try {
      const {
        licensePlate,
        servicesPerformed,
        schedulingDate,
        executionDate,
      } = car;

      const response = await api.post('/cars', {
        licensePlate,
        servicesPerformed,
        schedulingDate,
        executionDate,
        available: false,
      });

      if (response) {
        setCars([...cars, response.data]);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdateCar(
    car: Omit<ICar, 'id' | 'available'>,
  ): Promise<void> {
    const response = await api.put(`/cars/${editingCar.id}`, {
      ...car,
      available: editingCar.available,
    });

    const findIndexCars = cars.findIndex((carFindFilter) => {
      return editingCar.id === carFindFilter.id;
    });

    if (response) {
      cars[findIndexCars] = response.data;
      setCars([...cars]);
    }
  }

  async function handleDeleteCar(id: number): Promise<void> {
    await api.delete(`/cars/${id}`);

    const newCars = cars.filter((car) => {
      return car.id !== id;
    });
    setCars(newCars);
  }

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  function toggleEditModal(): void {
    setEditModalOpen(!editModalOpen);
  }

  function handleEditCar(car: ICar): void {
    setEditingCar(car);
    toggleEditModal();
  }

  return (
    <>
      <Header openModal={toggleModal} />
      <ModalAddCar
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddCar={handleAddCar}
      />
      <ModalEditCar
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingCar={editingCar}
        handleUpdateCar={handleUpdateCar}
      />

      <CarsHeader>
        <span>Serviço</span>
        <span>Data de Execução</span>
        <span>Data de Agendamento</span>
        <span>Placa</span>
      </CarsHeader>

      <CarsContainer>
        {cars &&
          cars.map((car) => (
            <Car
              key={car.id}
              car={car}
              handleDelete={handleDeleteCar}
              handleEditCar={handleEditCar}
            />
          ))}
      </CarsContainer>
    </>
  );
};

export default Dashboard;
