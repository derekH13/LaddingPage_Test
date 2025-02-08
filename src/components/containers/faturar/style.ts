import styled from "styled-components";

export const StyleContainer = styled.div`

display: flex;
flex-direction: column;
width: 100%;
padding: 5.4vw 0px;

@media(max-width: 1080px){
    justify-content: center;
    align-items: center;
}

.faturar_content{
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 40px;

    @media(max-width: 1080px){
        flex-direction: column;
    }
}
`