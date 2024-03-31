import styled from "styled-components";

const ProductsContainer = styled.section`
  width: 80%;
  margin: 0 auto;
  padding: 2em 0;

  div.products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    flex-wrap: wrap;
    gap: 2em;
    padding-top: 2em;
  }
`;

export default ProductsContainer;
