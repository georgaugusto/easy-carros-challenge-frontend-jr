import React, { useState } from 'react';

import { FiAlertCircle, FiXCircle, FiCheck } from 'react-icons/fi';

import { Container } from './styles';

interface ICar {
  id: number;
  licensePlate: string;
  servicesPerformed: string;
  schedulingDate: string;
  executionDate: string;
  available: boolean;
}

interface IProps {
  car: ICar;
  handleDelete: (id: number) => {};
  handleEditCar: (car: ICar) => void;
}

const Car: React.FC<IProps> = ({
  car,
  handleDelete,
  handleEditCar,
}: IProps) => {
  const [isAvailable, setIsAvailable] = useState(car.available);

  async function toggleAvailable(): Promise<void> {
    setIsAvailable(!isAvailable);
  }

  function setEditingCar(): void {
    handleEditCar(car);
  }

  return (
    <Container available={isAvailable}>
      <section className="body">
        <h2>{car.servicesPerformed}</h2>
        {car.executionDate === '' ? <p>-</p> : <p>{car.executionDate}</p>}
        <p>{car.schedulingDate}</p>
        <b>{car.licensePlate}</b>
        <div className="icon-container">
          <button
            type="button"
            className="edit-car"
            onClick={() => setEditingCar()}
          >
            <FiAlertCircle size={20} />
            Editar
          </button>

          <button
            type="button"
            className="remove-car"
            onClick={() => handleDelete(car.id)}
          >
            <FiXCircle size={20} />
            Exluir
          </button>

          {car.executionDate === '' ? (
            <label htmlFor={`available-switch-${car.id}`}>
              <input
                id={`available-switch-${car.id}`}
                type="checkbox"
                checked={false}
                disabled
                onChange={toggleAvailable}
              />
              <span>
                <FiCheck size={20} />
                Finalizar
              </span>
            </label>
          ) : (
            <label htmlFor={`available-switch-${car.id}`}>
              <input
                id={`available-switch-${car.id}`}
                type="checkbox"
                checked
                disabled
                onChange={toggleAvailable}
              />
              <span>
                <FiCheck size={20} />
                Finalizado
              </span>
            </label>
          )}
        </div>
      </section>
    </Container>
  );
};

export default Car;
