import React from 'react';

import { Container } from './styles';

import Logo from '../../assets/easy-carros-logo.png';

interface IHeaderProps {
  openModal: () => void;
}

const Header: React.FC<IHeaderProps> = ({ openModal }) => (
  <Container>
    <header>
      <img src={Logo} alt="GoRestaurant" />
      <nav>
        <div>
          <button
            type="button"
            onClick={() => {
              openModal();
            }}
          >
            <div className="text">Nova ordem de serviço</div>
          </button>
        </div>
      </nav>
    </header>
  </Container>
);

export default Header;
