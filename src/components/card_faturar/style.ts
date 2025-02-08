import styled from "styled-components"


type props = {
    Column: 'reverse' | 'default'
}

export const StyleCard = styled.div<props>`
display: flex;
flex-direction: ${props => props.Column == 'reverse' ? 'column-reverse' : 'column'};
width: 100%;
align-items: start;
max-width: 500px;
min-height: 436px;

@media(max-width: 1080px){
    min-height: auto;
}


img{
    height: 200px;
    margin: 0 auto;

    @media(max-width: 1080px){
        height: 150px;
    }
}

.cardFaturar_content{
    height: 100%;
    width: 100%;

    h3{
        font-family: "League Gothic", serif;
        font-size: 36px;
        letter-spacing: 2px;
        padding: 08px 0px;
        min-height: 103px;

        @media(max-width: 1080px){
            font-size: 30px;
            min-height: 88px;
        }
    }
}
`