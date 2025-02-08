import styled from "styled-components";

export const containerCarroousel = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
gap: 40px;
width: 100%;
`

export const situacoesStyle = styled.section`
padding-top: 40px;
min-height: 580px;
width: 100%;

.situacoes_title{
    width: 100%;
    text-align: center;
}

`

export const StyleMedia = styled.div`

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