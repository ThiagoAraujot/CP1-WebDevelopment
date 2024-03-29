import NavbarContainer, { TopicsContainer } from "./NavbarStyled";

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <div className="navbar">
          <div className="logo-container">
            <i className="bi bi-list"></i>
            <h1>SportStore</h1>
          </div>
          <div className="search">
            <i className="bi bi-search"></i>
            <input type="text" placeholder="Search whatever you want!" />
          </div>
          <div className="profile-container">
            <div className="login">
              <i className="bi bi-person"></i>
              <p>Sign Up/Sing In</p>
            </div>
            <div className="line"></div>
            <div className="cart">
              <i className="bi bi-cart2"></i>
              <p>Cart</p>
            </div>
          </div>
        </div>
      </NavbarContainer>
      <TopicsContainer>
        <div className="topics">
          <ul>
            <li>
              Soccer
              <i className="bi bi-chevron-down"></i>
            </li>
            <li>
              Football
              <i className="bi bi-chevron-down"></i>
            </li>
            <li>
              Tennis
              <i className="bi bi-chevron-down"></i>
            </li>
            <li>
              BasketBall
              <i className="bi bi-chevron-down"></i>
            </li>
            <li>
              HandBall
              <i className="bi bi-chevron-down"></i>
            </li>
            <li>
              Beach Tennis
              <i className="bi bi-chevron-down"></i>
            </li>
            <li>
              Swimming
              <i className="bi bi-chevron-down"></i>
            </li>
            <li>
              VoleyBall
              <i className="bi bi-chevron-down"></i>
            </li>
          </ul>
        </div>
      </TopicsContainer>
    </>
  );
};

export default Navbar;
