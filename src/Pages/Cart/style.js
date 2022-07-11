import styled from "styled-components";

export const CartResume = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 300px;
    background-color: #202224;
    gap: 10px;

    h2 {
        width: fit-content;
    }

    @media screen and (max-width: 710px) {
        .cart-resume {
            margin: 0 auto;
            width: 95%;
        }
    }
`

export const CartContainer = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;

    li {
        min-width: 100%;
        height: 130px;
        display: flex;
        flex-direction: row;
    }
`

export const MainContainer = styled.div`
    margin: 20px auto;
    display: flex;
    flex-direction: row;
    max-width: 860px;
    gap: 10px;

    img {
        max-width: 100px;
        height: auto;
    }

    h2 {
        width: 90%;
        font-family: "Poppins";
        font-size: 18px;
        color: #d4d4d6;
        top: 10px;
        left: 10px;
    }

    span {
        min-width: 130px;
        font-family: "Inter";
        font-size: 20px;
        color: green;
        text-align: center;
    }
    
    @media screen and (max-width: 710px) {
        flex-wrap: wrap;
    }
`