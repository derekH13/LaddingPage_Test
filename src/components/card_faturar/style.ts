import styled from "styled-components"


type props = {
    Column: 'reverse' | 'default'
}

export const StyleCard = styled.div<props>`
display: flex;
flex-direction: ${props => props.Column == 'reverse' ? 'column-reverse' : 'column'};
width: 100%;
align-items: start;
justify-content: start;
max-width: 500px;
min-height: 336px;

@media(max-width: 1080px){
    min-height: auto;
    flex-direction: column;
}


img{
    height: 170px;
    margin: 0 auto;

    @media(max-width: 1080px){
        height: 150px;
    }
}

.cardFaturar_content{
    width: 100%;

    h3{
        font-family: "League Gothic", serif;
        font-size: 33px;
        letter-spacing: 2px;
        padding-bottom: 8px;
        min-height: 103px;

        @media(max-width: 1080px){
            font-size: 30px;
            min-height: 88px;
        }
    }
}
`