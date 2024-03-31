import styled from 'styled-components';

const CategoriesContainer = styled.section`
width: 80%;
margin: 0 auto;
padding: 2em 0;

div.categories {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  flex-wrap: wrap;
  gap: 1em;
  padding-top: 2em;
}
`;

export default CategoriesContainer;