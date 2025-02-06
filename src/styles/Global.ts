import styled, { createGlobalStyle } from "styled-components";
import { Color } from "./variaveis";
import { TitleProps } from "../interface";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;

  font-family: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;




}

body{
  color-scheme: light dark;
  color: ${Color.BrancoFundo};
  background-color: ${Color.BrancoFundo};
}

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }
`;

// espaço das infomaçoes na tela
export const Interface = styled.div`
max-width: 1280px;
width: 100%;
margin: 0 auto;
`

// titulo padrão
export const Title = styled.h1<TitleProps>`
font-size: 40px;
font-weight: 300;
color: ${(TitleProps) => TitleProps.color  || Color.BrancoFundo};

span{
  font-weight: 700;
  color: ${(TitleProps) => TitleProps.colorSpan  || Color.BrancoFundo};

}
`

// texto padrão
export const Texto = styled.p<TitleProps>`
font-size: 20px;
font-weight: 300;
color: ${(TitleProps) => TitleProps.color  || Color.BrancoFundo};

span{
  font-weight: 700;
  color: ${(TitleProps) => TitleProps.colorSpan  || Color.BrancoFundo};

}
`



export default GlobalStyle;
