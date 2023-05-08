import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: unset;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme["base-label"]};
  }

  ::placeholder {
    color: ${props => props.theme["base-label"]};
  }

  body {
    color: red;
    background-color: ${props => props.theme["base-background"]};
    color: ${props => props.theme["base-text"]};
    --webkit-font-smoothing: antialiased;
    font-size: 16px;
  }

  span {
    color: ${props => props.theme["base-span"]};
  }

  body, input, textarea, button {
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Nunito', sans-serif;
    line-height: 1.6;
  }

  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }
`
