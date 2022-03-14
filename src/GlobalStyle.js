import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }
  
  body {
    font-size: 112.5%;
    margin: 0 auto;
    line-height: 1.5;
    display:flex;
    justify-content: center;
    color: crimson;
    text-align: center;
  }

`;
export default GlobalStyle;
