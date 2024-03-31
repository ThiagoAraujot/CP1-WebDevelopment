import CardProduct from "../CardProduct/CardProduct";
import ProductsContainer from "./ProductsStyled";

const Products = () => {
  return (
    <>
      <ProductsContainer>
        <div className="title">
          <h3>
            Grab the best deal on <bold>Shoes</bold>
          </h3>
          <p>
            View All
            <i className="bi bi-chevron-right"></i>
          </p>
        </div>

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
