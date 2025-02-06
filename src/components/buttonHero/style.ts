import styled from "styled-components";
import { Color } from "../../styles/variaveis";
import { PropsButton } from ".";


export const StyleButtonHero = styled.button<PropsButton>`
width: 100%;
padding: 10px 0px;
background-color: transparent;
display: flex;
align-items: center;
justify-content: center;
gap: 8px;
transition: all .4s;

border: none;
border: solid 2px ${Color.BrancoFundo};
border-radius: 30px;

font-size: 20px;
font-weight: 500;

color: ${PropsButton => PropsButton.color || 'black'};

&:hover{
    cursor: pointer;
    background-color: ${Color.BrancoFundo};
    color: ${Color.black}
}
`