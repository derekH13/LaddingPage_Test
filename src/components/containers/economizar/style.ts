import styled from "styled-components";
import { Color } from "../../../styles/variaveis";
import { Texto } from "../../../styles/Global";

export const EconomizarStyle = styled.section`
    background-image: url('src/assets/images/economizar.png');
    background-size: cover;  
    background-position: right;  
    min-height: 840px;
    height: 100%;
    width: 100%; 
    display: flex;
    flex-direction: column;
    justify-content: center;

    .economizar_content{
        display: flex;
        justify-content: end;
    }

`

export const topicosStyle = styled.div`
display: flex;
padding-top: 20px;

ul{
border-left: solid 2px  ${Color.verdePrimary};
display: flex;
flex-direction: column;
justify-content: space-between;

    li{
      list-style: none;
      position: relative; 
      height: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      color: ${Color.verdePrimary};
      font-weight: 700;
      font-size: 18px;

      span{
      color: ${Color.cinza}
      }

      &:before {
        content: "";
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background-color: black;
        border: solid 2px ${Color.verdePrimary};
        position: absolute;
        left: -54px; 
        top: 50%; 
        transform: translateY(-50%);

      }

      &:after{
        content: "";
        width: 12px;
        height: 12px;
        top: 50%; 
        transform: translateY(-50%);
        border-radius: 50%;
        background-color: ${Color.verdePrimary};
        position: absolute;
        z-index: 2;
        left: -40px; 
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