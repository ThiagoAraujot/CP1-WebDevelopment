import Title from "../Title/Title";
import TopContainer from "./TopBrandsStyled";
import nikeLogo from "../../assets/Nike-Logo.png";
import adidaslogo from "../../assets/adidaslogo.png";
import newbalancelogo from "../../assets/newbalancelogo.png";
import CardBrand from "./CardBrand";

const TopBrands = () => {
  return (
    <>
      <TopContainer>
        <Title msg="Top " bold="Shoes Brands" />

        <div className="cards-container">
          <CardBrand brandImg={nikeLogo} />
          <CardBrand brandImg={adidaslogo} />
          <CardBrand brandImg={newbalancelogo} />
        </div>
      </TopContainer>
    </>
  );
};

export default TopBrands;
