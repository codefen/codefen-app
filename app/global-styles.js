import { createGlobalStyle } from 'styled-components';
import { PRIMARY_RED } from 'utils/colors';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  html {
    --antd-wave-shadow-color: ${PRIMARY_RED};
  }

  body {
    font-family: 'Questrial', sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Questrial', sans-serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;

export default GlobalStyle;
