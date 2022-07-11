import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`  
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #1c1c1c;
    }

    ul {
        display: flex;
        margin: 20px auto;
        padding: 0 20px;
        flex-direction: row;
        width: 100vw;
        max-width: 900px;
        height: auto;
        list-style: none;
        flex-wrap: wrap;
        gap: 20px;
    }

    li {
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #202224;
        width: 200px;
        min-width: 200px;
        max-width: 200px;
        height: 330px;
        position: relative;
        border-radius: 10px;
        gap: 10px;
    }

    h1 {
        font-family: "Inter";
        font-weight: 700;
        padding: 5px;
        font-size: 20px;
        color: white;
    }

    h1:hover {
        cursor: pointer;
    }
    
    button {
        cursor: pointer;
    }

    @media screen and (max-width: 900px) {
        ul {
            overflow-y: auto;
            flex-wrap: nowrap;
        }
    }
`