import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1280px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 496px;
    height: 78px;
  }

  h1 {
    text-align: center;

    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    letter-spacing: 0px;

    color: #0c5990;
    opacity: 1;

    padding: 106px 0 16px 0;
  }

  p {
    width: 45%;
    text-align: center;

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    letter-spacing: 0px;

    color: #707070;
    opacity: 1;

    padding: 0 0 45px 0;
  }

  a {
    padding: 16px 38px;

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    letter-spacing: 0px;

    color: #ffffff;
    background: #0c5990 0% 0% no-repeat padding-box;
    border-radius: 32px;

    text-decoration: none;
    opacity: 1;
  }

  @media (max-width: 800px) {
    img {
      width: 90%;
      max-width: 496px;
      height: auto;
    }

    h1 {
      width: 90%;
    }

    p {
      width: 80%;
    }
  }
`;
