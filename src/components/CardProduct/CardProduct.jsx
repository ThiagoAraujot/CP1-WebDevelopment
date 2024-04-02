import CardContainer from "./CardProductStyled";


const CardProduct = ({img, name, price, discount}) => {
  return (
    <CardContainer>
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="info">
        <h4>{name}</h4>
        <p>{price}$</p>
        <span>Save -{discount}$</span>
      </div>
    </CardContainer>
  );
};

export default CardProduct;
