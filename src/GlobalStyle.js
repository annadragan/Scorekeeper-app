import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }
  
  body {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 112.5%;
    line-height: 1.5;
  }
  
  input,
  label,
  textarea,
  button {
    font-size: 1.2em;
  }
`;
export default GlobalStyle;
