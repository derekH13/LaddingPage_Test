import styled from "styled-components";
import { Texto, Title } from "../../styles/Global";
import { Color } from "../../styles/variaveis";


type props = {
    textButton?: string;
}


export const styleCard = styled.div<props>`
min-height: 404px;
height: max-content;
width: 333px;
position: relative;
margin: 10px 0px;
border-radius: 10px;
box-shadow: 0px 0px 20px 10px rgba(0,0,0,0.09);
padding: 30px 20px 10px 20px;
overflow: hidden;

${Title}{
margin-top: 8px;
min-height: 74px;
max-width: ${props => (props.textButton && props.textButton.length > 0) ? '88%' : 'auto'  };
}

${Texto}{
    font-weight: 400;
    min-height: ${props => (props.textButton && props.textButton.length > 0) ? '192px' : '144px'  };
}

.circulo{
    background-color: ${Color.verdeSecundary};
    width: 110px;
    height: 110px;
    position: absolute;
    border-radius: 50%;
    top: -30px;
    right: -30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: 900;


    
}
`


