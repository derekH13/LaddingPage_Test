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
    cursor: pointer;
    background-color: ${Color.BrancoFundo};
    color: ${Color.black};
}
`