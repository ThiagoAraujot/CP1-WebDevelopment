import styled from "styled-components";

const CardCategoryContainer = styled.div`
cursor: pointer;
width: auto;

    div.elipse {
        width: 7rem;
        height: 7rem;
        background-color: #F5F5F5;
        border: 1px solid #ededed;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        img {
            width: 70%;
        }
    }

    div.elipse:hover {
        border: 1px solid #008ecc;
        transition: 0.2s ease-in-out;
    }

    h4 {
        font-size: 1rem;
        font-weight: 400;
        color: #000000;
        text-align: center;
        padding-top: 1em;
    }

`;

export default CardCategoryContainer;