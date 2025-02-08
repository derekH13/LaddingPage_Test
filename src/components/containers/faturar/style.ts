import styled from "styled-components";
import { Title } from "../../../styles/Global";

export const StyleContainer = styled.div`

display: flex;
flex-direction: column;
width: 100%;
padding: 5.6vw 0px;

@media(max-width: 1080px){
    justify-content: center;
    align-items: center;
}

${Title}{
padding-bottom: 70px;
margin: 0 auto;
}

.faturar_content{
    min-height: 250px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 80px;

    @media(max-width: 1080px){
        flex-direction: column;
    }
}
`