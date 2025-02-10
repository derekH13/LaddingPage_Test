import styled from "styled-components";
import { Color } from "../../styles/variaveis";
import { PropsButton } from ".";


export const StyleButtonHero = styled.button<PropsButton>`
width: ${PropsButton => PropsButton.width ? PropsButton.width : '100%'};
padding: 8px;
background-color: ${PropsButton => PropsButton.bgColor ? PropsButton.bgColor : 'transparent'};
display: flex;
align-items: center;
justify-content: center;
gap: 8px;
transition: all .4s;

border: none;
border: solid 2px;
border-color: ${PropsButton => PropsButton.borderColor ? PropsButton.borderColor : 'transparent'};
border-radius: ${PropsButton => PropsButton.radiusButton ? PropsButton.radiusButton : 30}px;

font-size: 20px;
font-weight: 500;

color: ${PropsButton => PropsButton.color || 'white'};

&:hover{
    box-shadow: 0px 0px 20px 3px rgba(26,97,149,.2);
    transform: scale(1.001);
}

&.heroBtn:hover{
    cursor: pointer;
    background-color: ${Color.BrancoFundo};
    color: ${Color.black};
}

&.solucoesBtn:hover{
    cursor: pointer;
    background-color: ${Color.BrancoFundo};
    color: ${Color.verdeSecundary};
}

&.cardBtn:hover{
    cursor: pointer;
    border-color: ${Color.verdeSecundary};
    background-color: transparent;
    color: ${Color.verdeSecundary};
}


`