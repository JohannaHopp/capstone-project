import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        height: 100%;
        padding: 0;
        margin: 0.5em;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        
    }

    * {
        box-sizing: border-box;
        
    }

    :root {
        --primary: #ffffff;
        --green-button: #a5e39a;
        --red-button: #FA6E6E;
        --back-button: #BFC0BF;
        --red-headline: #ff0000;
    }
`;

export default GlobalStyles;
