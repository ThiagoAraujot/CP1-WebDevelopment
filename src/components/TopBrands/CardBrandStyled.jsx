import styled from "styled-components";

const CardBrandContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #2791cf94;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  &:hover {
    transform: scale(1.05);
    transition: all 0.5s;
  }
  img {
    width: 50%;
  }
`;

export default CardBrandContainer;
