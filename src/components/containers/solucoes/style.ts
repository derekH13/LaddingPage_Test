import styled from "styled-components";
import { Color } from "../../../styles/variaveis";

export const StyleSolucoes = styled.section`
width: 100%;
height: max-content; 
margin-bottom: 60px;
padding: 80px 0px;
background-color: ${Color.verdeSecundary};
min-height: 1000px;
clip-path: polygon( 0% 20%, 100% 0%, 100% 80%,  0% 100% );


.titulo{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
    margin-top: 140px;
}


.desktop{
    display: flex;
    
        @media(max-width: 1080px){
            display: none;
    
    }
    
}

.mobille{
    display: flex;
    width: 100%;

@media(min-width: 1080px){
    display: none;

}
}
`