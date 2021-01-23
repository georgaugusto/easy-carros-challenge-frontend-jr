import React, { useRef, useCallback } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface ICar {
  id: number;
  licensePlate: string;
  servicesPerformed: string;
  schedulingDate: string;
  executionDate: string;
  available: boolean;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateCar: (car: Omit<ICar, 'id' | 'available'>) => void;
  editingCar: ICar;
}

interface IEditCarData {
  licensePlate: string;
  servicesPerformed: string;
  schedulingDate: string;
  executionDate: string;
}

const ModalEditCar: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  editingCar,
  handleUpdateCar,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: IEditCarData) => {
      handleUpdateCar(data);
      setIsOpen();
    },
    [handleUpdateCar, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingCar}>
        <h1>Editar ordem de serviço</h1>
        <p>Os campos com * são obrigatórios</p>
        <span>Serviço Realizado*</span>
        <Input name="servicesPerformed" placeholder="Serviço Realizado" />
        <span>Data da Execução*</span>
        <Input name="executionDate" placeholder="Data da Execução" />
        <span>Data do Agendamento*</span>
        <Input name="schedulingDate" placeholder="Data do Agendamento" />
        <span>Placa*</span>
        <Input name="licensePlate" placeholder="Placa" />
        <div>
          <button type="submit">
            <p className="text">Salvar</p>
          </button>
          <button type="button" onClick={setIsOpen}>
            <p className="cancel">Cancelar</p>
          </button>
        </div>
      </Form>
    </Modal>
  );
};

export default ModalEditCar;
