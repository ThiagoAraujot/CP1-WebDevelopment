import Title from "../Title/Title";
import CategoriesContainer from "./CategoriesStyled";
import CardCategory from "../CardCategory/CardCategory";
import watchImg from "../../assets/watch-category.png";

const Categories = () => {
  return (
    <>
      <CategoriesContainer>
        <Title msg="Shop from " bold="Top Categories" />
        <div className="categories">
          <CardCategory img={watchImg} name="Watches" />
          <CardCategory img={watchImg} name="Shoes" />
          <CardCategory img={watchImg} name="Balls" />
          <CardCategory img={watchImg} name="Gloves" />
          <CardCategory img={watchImg} name="Glasses" />
          <CardCategory img={watchImg} name="Shirts" />
          <CardCategory img={watchImg} name="Acessories" />
        </div>
      </CategoriesContainer>
    </>
  );
};

export default Categories;
