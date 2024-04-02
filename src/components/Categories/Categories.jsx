import Title from "../Title/Title";
import CategoriesContainer from "./CategoriesStyled";
import CardCategory from "../CardCategory/CardCategory";
import watchImg from "../../assets/watch-category.png";
import ballImg from "../../assets/ball-category.webp";
import shoesImg from "../../assets/shoes-category.avif";
import glovesImg from "../../assets/gloves-category.png";
import glassesImg from "../../assets/glasses-category.avif";
import shirtsImg from "../../assets/shirts-category.webp";
import acessoriesImg from "../../assets/acessories-category.webp";
const Categories = () => {
  return (
    <>
      <CategoriesContainer>
        <Title msg="Shop from " bold="Top Categories" />
        <div className="categories">
          <CardCategory img={watchImg} name="Watches" />
          <CardCategory img={shoesImg} name="Shoes" />
          <CardCategory img={ballImg} name="Balls" />
          <CardCategory img={glovesImg} name="Gloves" />
          <CardCategory img={glassesImg} name="Glasses" />
          <CardCategory img={shirtsImg} name="Shirts" />
          <CardCategory img={acessoriesImg} name="Acessories" />
        </div>
      </CategoriesContainer>
    </>
  );
};

export default Categories;
