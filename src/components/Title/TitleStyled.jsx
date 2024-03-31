import styled from "styled-components";

const TitleContainer = styled.div`
  div.title {
    display: flex;
    justify-content: space-between;
    padding: 1em 0;
    border-bottom: 1px solid #d9d9d9a0;

    h3 {
      color: #666666;
      strong {
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
`;

export default TitleContainer;