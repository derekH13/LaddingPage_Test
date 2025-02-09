import styled from "styled-components";

export const containerCarroousel = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
gap: 40px;
width: 100%;
margin: 12px 0px;

@media(max-width: 1080px){
    display: block;
    justify-content: center;
    flex-direction: row;
    gap: 0px;
    width: 100%;

}
`

export const situacoesStyle = styled.section`
padding-top: 40px;
min-height: 580px;
width: 100%;


`

export const StyleMedia = styled.div`

.desktop{
display: flex;

    @media(max-width: 1080px){
        display: none;

    }

}

.situacoes_title{
    width: 100%;
    text-align: center;
    margin-top: 40px;
}


.mobille{
display: flex;
width: 100%;

@media(min-width: 1080px){
    display: none;

}
}

`