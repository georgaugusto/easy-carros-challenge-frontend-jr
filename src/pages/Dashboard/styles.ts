import styled from 'styled-components';

export const CarsContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  /* margin-top: -140px; */

  /* display: grid; */

  /* grid-template-columns: repeat(3, 1fr); */
  /* grid-gap: 32px; */

  @media (max-width: 800px) {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  }
`;

export const CarsHeader = styled.div`
  width: 100%;
  height: 32px;
  max-width: 1280px;

  display: flex;
  align-items: center;
  /* justify-content: space-between; */

  margin: 0 auto;
  padding: 0 30px;

  background: #0c5990 0% 0% no-repeat padding-box;
  border-radius: 4px 4px 0px 0px;

  span {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    letter-spacing: 0px;
    color: #ffffff;
  }

  span:first-child {
    width: 25%;
  }

  span:nth-child(2) {
    width: 14%;
  }

  span:nth-child(3) {
    width: 20%;
  }

  @media (max-width: 800px) {
    width: 100%;
    height: 120px;
    max-width: 800px;

    flex-wrap: wrap;

    span:nth-child(1n) {
      width: 100%;

      text-align: center;
    }
  }
`;
