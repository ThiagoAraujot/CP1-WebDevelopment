import CardProduct from "../CardProduct/CardProduct";
import Title from "../Title/Title";
import ProductsContainer from "./ProductsStyled";

const Products = () => {
  return (
    <>
      <ProductsContainer>
        <Title msg="Grab the best deal on " bold="Shoes" />
        <div className="products">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </ProductsContainer>
    </>
  );
};

export default Products;
