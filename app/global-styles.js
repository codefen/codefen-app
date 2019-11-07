import { createGlobalStyle } from 'styled-components';
import { PRIMARY_RED, PRIMARY_GREY } from 'utils/colors';
import background from 'images/background_black.svg';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    font-family: 'Questrial', sans-serif!important;
  }

  html {
    --antd-wave-shadow-color: ${PRIMARY_RED};
  }

  body {
    font-family: 'Questrial', sans-serif;
  }

  #app {
    background-image: url('${background}');
    min-height: 100%;
    min-width: 100%;
  }

  p, label, h1, h2, h3, h4, h5 {
    font-family: 'Questrial', sans-serif;
    line-height: 1.5em;
  }

  hr {
    border-color: ${PRIMARY_GREY};
    background-color: ${PRIMARY_GREY};
    color: ${PRIMARY_GREY};
    border: 0;
    height: 1px!important;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;

export default GlobalStyle;
