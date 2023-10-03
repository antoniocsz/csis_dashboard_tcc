import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;   
  }

  body {
    text-decoration: none;
    background-color: #000;
    color: #FFF;
    font-size: 16px;
  }
`