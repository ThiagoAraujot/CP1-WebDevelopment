import styled from "styled-components";

const NavbarContainer = styled.nav`
  width: 100%;
  background-color: #ffff;
  padding: 1em 0;
  border-bottom: 1px solid #d9d9d9a0;

  div.navbar {
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;

    div.logo-container {
      display: flex;
      align-items: center;
      gap: 1em;

      i {
        background-color: #f3f9fb;
        padding: 0.4em;
        border-radius: 8px;
      }

      h1 {
        font-size: 1.5em;
        font-weight: 700;
        color: #008ecc;
      }
    }
  }

  div.search {
    display: flex;
    align-items: center;
    gap: 0.5em;
    background-color: #f3f9fb;
    padding: 0.7em;
    border-radius: 8px;

    input {
      width: 300px;
      border: none;
      background-color: transparent;
      outline: none;
    }
  }

  div.profile-container {
    display: flex;
    align-items: center;
    gap: 1em;

    div.login {
      display: flex;
      align-items: center;
      gap: 0.5em;
      cursor: pointer;

      i {
        padding: 0.4em;
        border-radius: 8px;
      }
    }

    div.cart {
      display: flex;
      align-items: center;
      gap: 0.5em;
      cursor: pointer;

      i {
        padding: 0.4em;
        border-radius: 8px;
      }
    }
  }

  div.line {
    width: 1px;
    height: 20px;
    background-color: #d9d9d9;
  }

  i {
    color: #008ecc;
    cursor: pointer;
  }

  p {
    font-size: 0.8em;
    color: #333333;
  }
`;

export const TopicsContainer = styled.div`
  width: 100%;
  background-color: #fff;

  div.topics {
    width: 95%;
    margin: 0 auto;
    ul {
      display: flex;
      justify-content: space-evenly;
      gap: 1em;
      padding: 1em 0;
      list-style-type: none;

      li {
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5em;
        background-color: #f3f9fb;
        padding: 0.5em 1em;
        border-radius: 15px;
        font-size: 0.9em;

        &:hover {
          transition: 0.2s ease-in-out;
          background-color: #008ecc;
          color: #fff;

          i {
            color: #fff;
          }
        }
      }

      i {
        color: #008ecc;
      }
    }
  }
`;

export default NavbarContainer;
