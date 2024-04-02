import CardCategoryContainer from "./CardCategoryStyled";
import watchImg from '../../assets/watch-category.png';

const CardCategory = () => {
  return (
    <>
      <CardCategoryContainer>
        <div className="elipse">
          <img src={watchImg} alt="" />
        </div>
        <h4>Watches</h4>
      </CardCategoryContainer>
    </>
  );
};

export default CardCategory;