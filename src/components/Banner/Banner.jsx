import BannerContainer from "./BannerStyled"
import bannerImg from "../../assets/banner.webp"

const Banner = () => {
  return (
    <BannerContainer>
      <div className="banner-txt">
        <h2>Choose Your Best Partner!</h2>
        <p>Our shop has a wide variety of shoe models. Come and choose for yourself a suitable pair to wear anytime and anywhere.</p>
        <button>Shop Now</button>
      </div>
      <div className="banner-img">
        <img src={bannerImg} alt="" />
      </div>
    </BannerContainer>
  )
}

export default Banner
