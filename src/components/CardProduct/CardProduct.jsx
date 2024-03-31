import CardContainer from "./CardProductStyled";
import shoeImg from "../../assets/shoeimg.webp";

const CardProduct = () => {
  return (
    <CardContainer>
      <div className="img">
        <img src={shoeImg} alt="" />
      </div>
      <div className="info">
        <h4>Nike Dunk SB</h4>
        <p>1.999$</p>
        <span>Save -100$</span>
      </div>
    </CardContainer>
  );
};

export default CardProduct;
