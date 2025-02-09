import styled from "styled-components";
import { Color } from "../../../styles/variaveis";

type props = {
    mostrar: boolean
}


export const styleHeader = styled.nav`
width: 100%;
position: fixed;
z-index: 4;

& > img{

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
    height: 45px;
    transform: translateY(-20px);

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
            border-bottom: solid 2px transparent;
            transition: all .4s ease;
            padding-bottom: 4px;

            &:hover{
                color: ${Color.verdeSecundary};
                border-color: ${Color.verdeSecundary};
            }
        }
    }
}
`