import styled from "styled-components";
import { Color } from "../../../styles/variaveis";


export const StyleNavModal = styled.div`
height: 100vh;
background-color: #000;
max-width: 300px;
width: 100%; 
position: fixed;
top: 79px;
z-index: 100;
right: -310px;
transition: right .4s ease;
border-left: solid 1px ${Color.cinzaSecundary};

&.active{
right: 0px;
}

nav{
height: 100%;

    ul{
        display: flex;
        flex-direction: column;
        padding-left: 0px;
        
        
        li{
            list-style: none;
            display: block;
            width: 100%;
            min-height: 60px;
            padding-left: 26px;
            display: flex;
            align-items: center;
            transition: all .4s ease;

            &:hover{
                background-color: ${Color.BrancoFundo};

                a{
                color: ${Color.black};
                }
            }


            a{
                color: ${Color.verdeSecundary};
                font-weight: 600;

            }
        }
    }
}
`