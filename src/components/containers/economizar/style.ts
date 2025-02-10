import styled from "styled-components";
import { Color } from "../../../styles/variaveis";
import { Texto } from "../../../styles/Global";

export const EconomizarStyle = styled.section`
    background-image: url('https://i.im.ge/2025/02/10/H01B8C.economizar.png');
    background-size: cover;  
    background-position: center;  
    min-height: 840px;
    height: 100%;
    width: 100%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 80px 0px;
    

    .economizar_content{
        display: flex;
        justify-content: end;
    }

`

export const topicosStyle = styled.div`
display: flex;
padding-top: 20px;

ul{
border-left: solid 2px  ${Color.verdeSecundary};
display: flex;
flex-direction: column;
justify-content: space-between;

@media(max-width: 1080px){
    margin-left: 20px;
}
    

    li{
      list-style: none;
      position: relative; 
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      color: ${Color.verdeSecundary};
      font-weight: 700;
      font-size: 18px;

      span{
      color: ${Color.cinza};
      font-size: 16px;
      }

      &:before {
        content: "";
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background-color: black;
        border: solid 2px ${Color.verdeSecundary};
        position: absolute;
        left: -54px; 
        top: 50%; 
        transform: translateY(-50%);

      }

      &:after{
        content: "";
        width: 15px;
        height: 15px;
        top: 50%; 
        transform: translateY(-50%);
        border-radius: 50%;
        background-color: ${Color.verdeSecundary};
        position: absolute;
        z-index: 2;
        left: -39px; 
      }

    }
}
`

export const Content = styled.div`
max-width: 650px;
width: 100%;

${Texto}{
padding-top: 16px;
}

`