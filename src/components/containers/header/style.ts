import styled from "styled-components";
import { Color } from "../../../styles/variaveis";

type props = {
    mostrar: boolean
}


export const styleHeader = styled.nav<props>`
width: 100%;
position: fixed;
z-index: 4;

& > img{
    visibility: ${props => props.mostrar != true ? 'hidden' : 'visible'};
    object-fit: cover;
    wight: 100%;
    height: 580px;
    overflow: hidden;
    clip-path: inset(0px 0px 510px 0px);
    position: absolute;
    transition: all .4s;
}
`

export const styledContent = styled.div<props>`
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 25px;
position: relative;
z-index: 100;

img{
    visibility: ${props => props.mostrar == true ? 'visible' : 'hidden'};
    height: 45px;
    transform: translateY(-10px);

}

.mobille{
@media(min-width: 784px){
    display: none;
}
}


ul{
display: flex;
align-items: center;
gap: 16px;
visibility: visible;

@media(max-width: 1080px){
display: none;
}

    li{
        list-style: none;

        a{
            color: ${Color.BrancoFundo};
            font-size: 17px;
            font-weight: 500;

            &:hover{
                color: ${Color.verdeSecundary};
            }
        }
    }
}
`