import styled from "styled-components";

const ProductsContainer = styled.section`
  width: 80%;
  margin: 0 auto;
  padding: 2em 0;

  div.title {
    display: flex;
    justify-content: space-between;
    padding: 1em 0;
    border-bottom: 1px solid #d9d9d9a0;

    h3 {
      color: #666666;
      bold {
        color: #008ecc;
      }
    }

    p {
      cursor: pointer;
      font-size: 0.8em;
      i {
        color: #008ecc;
        padding-left: 0.5em;
      }
    }
  }

  div.products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    flex-wrap: wrap;
    gap: 2em;
    padding-top: 2em;
  }
`;

export default ProductsContainer;
