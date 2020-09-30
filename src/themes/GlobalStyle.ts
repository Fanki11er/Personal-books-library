import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body{
        width: 100%;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }
`;
export default GlobalStyle;
