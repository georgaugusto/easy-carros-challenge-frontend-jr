import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Form = styled(Unform)`
  padding: 48px 40px;
  display: flex;
  flex-direction: column;

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    letter-spacing: 0px;

    color: #0c5990;

    margin-bottom: 10px;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    letter-spacing: 0px;

    color: #c1c1c1;

    margin-bottom: 40px;
  }

  span {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    letter-spacing: 0px;

    color: #c1c1c1;

    padding-bottom: 5px;
  }

  span + div {
    margin-bottom: 24px;
  }

  Input {
    color: #707070;
  }

  div {
    display: flex;

    button {
      width: 168px;
      height: 48px;

      display: flex;
      flex-direction: row;
      align-items: center;

      font-weight: 600;
      border: 0;
      background: #0c5990 0% 0% no-repeat padding-box;
      border-radius: 24px;

      margin: 0 10px 0 0;

      .text {
        margin: 0 auto;
        color: #fff;
      }

      .cancel {
        padding: 14px 52px;

        border-radius: 24px;
        margin: 0 auto;
        background: #fff 0% 0% no-repeat padding-box;
        color: #0c5990;
      }
    }
  }

  @media (max-width: 800px) {
    max-width: 800px;
    margin: 0 auto;

    width: 50%;

    div {
      button {
        .cancel {
          padding: 14px 30px;
        }
      }
    }
  }
`;
