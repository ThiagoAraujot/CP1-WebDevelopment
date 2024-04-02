import CardCategoryContainer from "./CardCategoryStyled";

const CardCategory = ({ img, name }) => {
  return (
    <>
      <CardCategoryContainer>
        <div className="elipse">
          <img src={img} alt="" />
        </div>
        <h4>{name}</h4>
      </CardCategoryContainer>
    </>
  );
};

export default CardCategory;
