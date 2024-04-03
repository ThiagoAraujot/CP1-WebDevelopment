import styled from "styled-components";

const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  border-radius: 20px;
  margin: 0 auto;
  background: rgb(0, 142, 204);
  background: linear-gradient(
    25deg,
    rgba(0, 142, 204, 1) 0%,
    rgba(243, 249, 251, 1) 100%
  );
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  .banner-txt {
    padding: 0 2em;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
    h2 {
      font-size: 2.5rem;
      color: #f6f6f6;
    }
    p {
      font-size: 1.2rem;
      color: #ffffff;
    }
    button {
      width: 10em;
      padding: 0.5em 1em;
      border: 1px solid #000000;
      border-radius: 9px;
      background-color: black;
      color: #ffffff;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        background-color: #ffffff;
        color: #000000;
        border: none;
      }
    }
  }

  .banner-img {
    img {
      width: 420px;
      height: 100%;
      object-fit: cover;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }
`;

export default BannerContainer;
