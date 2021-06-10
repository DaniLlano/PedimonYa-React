import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    margin: 0;
    height: 100vh;
    background-color: #fafafa;
    font-family: 'Montserrat', sans-serif;
}

a {
    text-decoration: none;
    color: #0032bc;
}
`