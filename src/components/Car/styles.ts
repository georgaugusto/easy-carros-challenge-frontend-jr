import styled from 'styled-components';

interface IFoodPlateProps {
  available: boolean;
}

export const Container = styled.div<IFoodPlateProps>`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 2px 2px 10px #00000029;
  border-radius: 4px;
  opacity: 1;

  margin: 25px 0;

  section.body {
    width: 100%;
    height: 72px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 30px;

    h2 {
      width: 20%;

      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      letter-spacing: 0px;

      text-align: center;
      color: #0c5990;
    }

    p {
      width: 10%;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      letter-spacing: 0px;

      text-align: center;
      color: #707070;
    }

    b {
      width: 10%;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      letter-spacing: 0px;

      text-align: center;
      text-transform: uppercase;

      color: #0c5990;
    }
  }

  div.icon-container {
    display: flex;

    button {
      padding: 10px;

      display: flex;

      transition: 0.1s;

      border: 1px solid var(--negative);
      background: #ffffff 0% 0% no-repeat padding-box;
      /* border: 1px solid #f91919; */
      border-radius: 32px;
      opacity: 1;

      svg {
        /* color: #f91919; */
      }

      & + button {
        margin-left: 6px;
      }
    }

    button.edit-car {
      color: #eed202;
      border: 1px solid #eed202;

      svg {
        color: #eed202;
        margin-right: 8px;
      }
    }

    button.remove-car {
      color: #f91919;
      border: 1px solid #f91919;

      svg {
        color: #f91919;
        margin-right: 8px;
      }
    }
  }

  label {
    margin-left: 6px;

    input {
      display: none;
    }

    span {
      width: 150px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;

      border-radius: 25px;
      /* cursor: pointer; */
      color: #02e64a;
      border: 2px solid #02e64a;

      svg {
        padding: 0 5px 0 0;
      }
    }
  }

  label [type='checkbox']:checked + span {
    background-color: #02e64a;
    color: #fff;
  }

  @media (max-width: 800px) {
    padding: 0px;

    section.body {
      width: 100%;
      height: 220px;
      flex-wrap: wrap;

      display: flex;
      align-items: center;
      justify-content: center;

      padding: 10px;

      h2 {
        width: 100%;
      }

      p {
        width: 100%;
      }

      b {
        width: 100%;
      }
    }

    div.icon-container {
      width: 100%;

      flex-wrap: wrap;
      align-items: center;
      justify-content: center;

      button {
        margin: 10px;
      }
    }
  }
`;
