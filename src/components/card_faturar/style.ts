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

@media(max-width: 1080px){
    min-height: auto;
    flex-direction: column;
}



.cardFaturar_content{
    width: 100%;

    h3{
        font-size: 20px;
        letter-spacing: 2px;


        @media(max-width: 1080px){
            font-size: 18px;

        }
    }
}
`