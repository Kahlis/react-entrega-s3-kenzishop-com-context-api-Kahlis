import styled from "styled-components";

export const TotalContainer = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    span {
        margin-top: 2px;
        font-family: "Poppins";
        font-weight: 700;
        color: #39ff14;
    }

    img {
        width: 20px;
        height: 20px;
    }
`

export const StyledHeader = styled.header`
    padding: 10px;
    display: flex;
    margin: 0 auto;
    flex-direction: row;
    width: 100vw;
    max-width: calc(900px - 40px);
    justify-content: space-between;
    left: 0%;
    background-color: #202224;
    border-radius: 0 0 20px 20px;
`