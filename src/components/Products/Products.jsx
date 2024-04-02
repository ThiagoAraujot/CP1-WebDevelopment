import CardProduct from "../CardProduct/CardProduct";
import Title from "../Title/Title";
import ProductsContainer from "./ProductsStyled";
import shoeImg from "../../assets/shoeimg.webp";

const Products = () => {
  return (
    <>
      <ProductsContainer>
        <Title msg="Grab the best deal on " bold="Shoes" />
        <div className="products">
          <CardProduct
            img={shoeImg}
            name="Nike Dunk SB"
            price="1.999"
            discount="100"
          />
          <CardProduct
            img={shoeImg}
            name="New Balance 500"
            price="500"
            discount="50"
          />
          <CardProduct
            img={shoeImg}
            name="Adidas Foam Runner"
            price="1.200"
            discount="200"
          />
          <CardProduct
            img={shoeImg}
            name="Yeezy Slide"
            price="899"
            discount="75"
          />
        </div>
      </ProductsContainer>
    </>
  );
};

export default Products;
