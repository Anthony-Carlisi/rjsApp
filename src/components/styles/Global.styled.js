import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  text-decoration: none;
  margin: 0;
  padding: 0;
  list-style-type: none;
  outline: none;
  border: none;
}

ul {
  padding: 0;
  margin: 0;
}

`

export default GlobalStyle
