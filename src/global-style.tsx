import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    margin: 0;
    background: ${colors.blue};
    overflow: hidden; 
  }
`;
