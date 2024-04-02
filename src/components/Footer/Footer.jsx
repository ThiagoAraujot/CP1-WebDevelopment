import IOS from "../../assets/image 11.svg";
import Android from "../../assets/image 10.svg";
import FooterContainer from "./FooterStyled";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <div className="info">
          <div className="column1">
            <h1>SportStore</h1>
            <h2>Contact us</h2>
            <div className="whatsapp">
              <i className="bi bi-whatsapp"></i>
              <p>+1 234 567 890</p>
            </div>

            <div className="phone">
              <i className="bi bi-telephone"></i>
              <p>+1 234 567 890</p>
            </div>

            <h2>Download our App</h2>
            <div className="download">
              <img src={IOS} alt="" />
              <img src={Android} alt="" />
            </div>
          </div>
          <div className="column2">
            <h2>Most Popular Categories</h2>
            <ul>
              <li>Soccer</li>
              <li>Football</li>
              <li>VoleyBall</li>
              <li>HandBall</li>
              <li>Ping-Pong</li>
              <li>Skate</li>
              <li>Beach Tennis</li>
              <li>Tennis</li>
              <li>Golf</li>
            </ul>
          </div>
          <div className="column3">
            <h2>Customer Services</h2>
            <ul>
              <li>About Us</li>
              <li>Delivery Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="line"></div>

        <div className="copy">
          <p>&copy; 2024 SportStore. All Rights Reserved</p>
        </div>
      </FooterContainer>
    </>
  );
};

export default Footer;
