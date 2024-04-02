import CardBrandContainer from "./CardBrandStyled"

function CardBrand({brandImg}) {
  return (
    <CardBrandContainer>
       <img src={brandImg} alt="" />
    </CardBrandContainer>
  )
}

export default CardBrand