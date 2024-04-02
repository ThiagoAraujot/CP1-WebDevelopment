import styled from "styled-components";

export const TopContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 2rem 0;

  .cards-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 2rem 0;
  }
`

export default TopContainer;