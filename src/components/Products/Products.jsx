import CardProduct from "../CardProduct/CardProduct";
import Title from "../Title/Title";
import ProductsContainer from "./ProductsStyled";
import nikedunkimg from "../../assets/nikedunkimg.png";
import newbalance from "../../assets/newbalance.png";
import airmax from "../../assets/airmax.png";
import energyfalcon from "../../assets/energyfalcon.png";

const Products = () => {
  return (
    <>
      <ProductsContainer>
        <Title msg="Grab the best deal on " bold="Shoes" />
        <div className="products">
          <CardProduct
            img={nikedunkimg}
            name="Nike Dunk SB"
            price="1.999"
            discount="100"
          />
          <CardProduct
            img={newbalance}
            name="New Balance 500"
            price="500"
            discount="50"
          />
          <CardProduct
            img={airmax}
            name="Air Max One"
            price="1.200"
            discount="200"
          />
          <CardProduct
            img={energyfalcon}
            name="Energy Falcon"
            price="899"
            discount="75"
          />
        </div>
      </ProductsContainer>
    </>
  );
};

export default Products;
