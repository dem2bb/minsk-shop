import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box
}
body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
}
button {
    color: ${props => props.theme.colors.buttonText};
    background-color: ${props => props.theme.colors.main};
    height: 30px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    border: none;
    border-radius: 50pc;
    outline: none;
    cursor: pointer;
    padding: 0 10px;
}
button:hover {
    background-color: ${props => props.theme.colors.active};
  }
label {
    color: ${props => props.theme.colors.label};
    font-size: 12px;
    line-height: 20px;
}
input, select {
    color: ${props => props.theme.colors.input};
    border: 1px solid ${props => props.theme.colors.main};
    height: 25px;
    border-radius: 50pc;
    outline: none;
    /* margin-bottom: 10px; */
    padding: 0 10px;
    height: 25px;
    width: 100%;
}
a {
    color: ${props => props.theme.colors.text}
}
`;

export default GlobalStyle;
