import styled from "styled-components";

const CardBrandContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #2791cf94;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &:hover {
    transform: scale(1.05);
    transition: all 0.9s ease;
  }
  img {
    width: 50%;
  }
`;

export default CardBrandContainer;
