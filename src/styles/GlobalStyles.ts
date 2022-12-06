import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        font-weight: 400;
        box-sizing: border-box;
    }

    html {
        font-size: 10px;
    }

    body {
        margin: 0;
        padding: 0;
    }

    h1, h2, h3, h4, h5, h5 {
        font-weight: 700;
        margin-top: 0;
    }

    p {
        margin-top: 0;
    }

    a {
        text-decoration: none;
        font-weight: 500;
    }
`;

export default GlobalStyles;
