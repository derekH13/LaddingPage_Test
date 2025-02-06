import styled from "styled-components";
import { Color } from "../../../styles/variaveis";

export const styleHeader = styled.nav`
width: 100%;
position: fixed;
padding-top: 25px;
` 

export const styledContente = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

img{
height: 45px;
}


ul{
    display: flex;
    align-items: center;
    gap: 16px;

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