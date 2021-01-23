import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 30px 0;

  header {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 496px;
      height: 78px;
    }

    nav {
      div {
        button {
          width: 250px;
          height: 48px;

          font-weight: 600;
          border-radius: 24px;
          border: 0;
          background: #0c5990 0% 0% no-repeat padding-box;
          color: #fff;

          display: flex;
          flex-direction: row;
          align-items: center;

          .text {
            margin: 0 auto;
          }
        }
      }
    }
  }

  @media (max-width: 800px) {
    header {
      flex-wrap: wrap;

      img {
        width: 80%;
        height: 58px;
        margin: 0 auto;
      }
    }

    nav {
      margin: 0 auto;
      padding-top: 25px;
    }
  }
`;
