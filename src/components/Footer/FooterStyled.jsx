import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 3rem 0;
  background-color: #008ecc;
  color: #fff;

  .info {
    display: flex;
    justify-content: space-around;
    align-items: start;
  }

  h2 {
    font-size: 1rem;
  }
  .column1 {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .whatsapp,
    .phone {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .download {
      display: flex;
      gap: 1rem;
    }
  }

  .column2,
  .column3 {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
      border-bottom: 2px solid white;
      padding-bottom: 0.5rem;
    }
    ul {
      list-style-type: none;
      padding: 0;

      li {
        padding-bottom: 0.7rem;
        font-weight: 400;
        cursor: pointer;
      }
    }
  }

  .line {
    width: 90%;
    margin: 0 auto;
    margin-top: 2rem;
    border-top: 2px solid #d9d9d9a0;
  }

  .copy {
    text-align: center;
    padding-top: 2rem;
  }
`;

export default FooterContainer;
