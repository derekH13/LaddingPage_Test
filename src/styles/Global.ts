import styled, { createGlobalStyle } from "styled-components";
import { Color } from "./variaveis";
import { PropsContainer, TitleProps } from "../interface";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;

  font-family: "Poppins", serif;
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
max-width: 1240px;
width: 95%;
margin: 0 auto;
`

// titulo padrão
export const Title = styled.h1<TitleProps>`
font-size: ${TitleProps => TitleProps.tamanho == 'middle' ? '26px' : '36px'};

font-weight: ${(TitleProps) => TitleProps.weight  || '300'};
color: ${(TitleProps) => TitleProps.color  || Color.BrancoFundo};

@media(max-width: 1080px){
  font-size: 30px;
}

span{
  font-weight: 700;
  color: ${(TitleProps) => TitleProps.colorSpan  || Color.BrancoFundo};

}
`

// texto padrão
export const Texto = styled.p<TitleProps>`
font-size: 16px;
font-weight: 300;
color: ${(TitleProps) => TitleProps.color  || Color.BrancoFundo};
font-family: 'Open Sans', sans-serif !important;
letter-spacing: .5px;

span{
  font-weight: 700;
  color: ${(TitleProps) => TitleProps.colorSpan  || Color.BrancoFundo};

}
`

export const ContainerInfo = styled.div<PropsContainer>`
margin-top: 90px;
display: flex;
flex-direction: row;
background-color: ${PropsContainer => PropsContainer.bg || 'transparent'};
min-height: 800px;
height: 100%;
width: 100%;

@media(max-width: 1080px){
flex-direction: column;
}

.imagemFundo{
    background-size: cover;  
    background-position: center;  
    width: 50%;
    height: 100%;
    z-index-2;

    img{
      object-fit: cover;
      height: 100%;

      @media(max-width: 1080px){
        margin-top: 16px;
        width: 100%;
        max-height: 600px;
        height: auto;
  }
      }
      
      
      @media(max-width: 1080px){
        margin-top: 16px;
        width: 100%;
        max-height: 500;
  }
}

`



export default GlobalStyle;
