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

interface ICreateCarData {
  licensePlate: string;
  servicesPerformed: string;
  schedulingDate: string;
  executionDate: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddCar: (car: Omit<ICar, 'id' | 'available'>) => void;
}

const ModalAddCar: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddCar,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ICreateCarData) => {
      handleAddCar(data);
      setIsOpen();
    },
    [handleAddCar, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Nova ordem de serviço</h1>
        <p>Os campos com * são obrigatórios</p>
        <span>Serviço Realizado*</span>
        <Input
          name="servicesPerformed"
          placeholder="Serviço Realizado"
          required
        />
        <span>Data da Execução*</span>
        <Input name="executionDate" placeholder="Data da Execução" />
        <span>Data do Agendamento*</span>
        <Input
          name="schedulingDate"
          placeholder="Data do Agendamento"
          required
        />
        <span>Placa*</span>
        <Input name="licensePlate" placeholder="Placa" required />
        <div>
          <button type="submit">
            <p className="text">Adicionar</p>
          </button>
          <button type="button" onClick={setIsOpen}>
            <p className="cancel">Cancelar</p>
          </button>
        </div>
      </Form>
    </Modal>
  );
};

export default ModalAddCar;
