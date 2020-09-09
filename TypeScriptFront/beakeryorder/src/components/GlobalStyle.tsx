import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
      box-sizing: border-box;
      margin: 0;
    }
`;

export default GlobalStyle;