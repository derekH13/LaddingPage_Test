import styled from "styled-components";
import { Title } from "../../../styles/Global";

export const StyleContainer = styled.div`
display: flex;
width: 100%;
justify-content: end;
height: 100%;
align-items: center;
padding: 80px 0px 0px 0px;

@media(max-width: 1080px){
    justify-content: center;
    align-items: center;
}

.faturar_container{
   max-width: 560px;
   margin-right: 17%;
   margin-left: 8px;

    @media(max-width: 1080px){
        max-width: 100%;
        margin-right: auto;
    }
}

${Title}{
padding-bottom: 30px;
}

.faturar_content{
    min-height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    
    @media(max-width: 1080px){
        gap: 10px;
        flex-direction: column;
    }
    @media(max-width: 376px){
        min-height: 280px;
    }
}
`