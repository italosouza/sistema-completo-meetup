import { createGlobalStyle } from 'styled-components'

import 'react-perfect-scrollbar/dist/css/styles.css'
import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0
  }

  html, body, #root {
    height: 100%;
    margin: 0 auto;
  }

  body {
    background: #191920;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font-family: Roboto, Arial, Helvetica, sans-serif;
    font-size: 14px;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

`
