import React from 'react';

import Logo from '../../assets/easy-carros-logo.png';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <img src={Logo} alt="GoRestaurant" />
      <h1>Bem-vindo ao teste front end!</h1>
      <p>
        Este teste tem como objetivo avaliar e desafiar você. Não é obrigatório
        realizá-lo completamente, queremos apenas reconhecer seu esforço e
        potencial para aprender, se adaptar e tomar decisões.
      </p>
      <div>
        <a href="/dashboard">Entrar</a>
      </div>
    </Container>
  );
};

export default Dashboard;
