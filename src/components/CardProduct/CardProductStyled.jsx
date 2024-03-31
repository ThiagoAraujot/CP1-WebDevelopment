import styled from "styled-components";

const CardContainer = styled.div`
  cursor: pointer;
  width: 220px;
  border-radius: 10px;
  border: 1px solid #ededed;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  &:hover {
    border: 1px solid #008ecc;
    transition: 0.2s ease-in-out;
  }

  .img {
    img {
      width: 100%;
      border-radius: 10px 10px 0 0;
    }
  }

  .info {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 0.4em;

    h4 {
      font-size: 1.2rem;
      font-weight: 500;
      color: #333;
    }

    p {
      font-size: 1rem;
      font-weight: 400;
      color: #333;
      padding-bottom: 0.5em;
      border-bottom: 1px solid #ededed;
    }

    span {
      font-size: 0.8rem;
      font-weight: 400;
      color: #28c93b;
    }
  }
`;

export default CardContainer;
