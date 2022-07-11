import styled from "styled-components";

export const ProductCard = styled.li`
    position: relative;

    h2 {
        width: 90%;
        font-family: "Poppins";
        font-size: 18px;
        color: #d4d4d6;
        position: absolute;
        top: 10px;
        left: 10px;
    }

    img {
        width: 80%;
        height: auto;
    }
    
    button {
        width: 80%;
        height: 27px;
        position: absolute;
        bottom: 8px;
        color: black;
        font-family: "Poppins";
        font-weight: 700;
        text-transform: uppercase;
        background-color: #39ff14;
        outline: none;
        border: none;
    }
`

export const DescriptionField = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 30px;
    gap: 10px;

    span {
        font-family: "Inter";
        font-size: 13px;
        color: #fce40b;
    }

    p {
        font-family: "Inter";
        font-size: 13px;
        color: #8d8d8d;
        text-align: center;
    }
`