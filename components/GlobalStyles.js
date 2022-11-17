import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        
    }

    * {
        box-sizing: border-box;
        
    }

    :root {
        --primary: #ffffff;
        --green-button: #a5e39a;
        --green-button-hover: #7dc070;
        --back-button: #BFC0BF;
        --back-button-hover: #a0a1a0;
        --red-headline: #ff0000;
    }
`;

export default GlobalStyles;
