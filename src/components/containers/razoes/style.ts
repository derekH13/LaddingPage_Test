import styled from "styled-components";
import { Color } from "../../../styles/variaveis";


export const StyleRazoes = styled.section`
    display: grid;
    grid-template-columns: 560px auto;
    width: 100%;
    min-height: 840px;
    height: max-content;
    justify-content: center;
    align-items: center;

@media(max-width: 890px){
    grid-template-columns: 1fr;
}


.razoes_introducao{
 height: max-content;



p{
    line-height: 36px;;
    color: ${Color.black};
    font-size: 20px;
    font-weight: 300;
}
}

.razoes_lista{
    color: ${Color.black};
    display: flex;
    flex-direction: column;
    gap: 28px;
    height: max-content;

 @media(max-width: 890px){
    padding-left: 0px; 
    grid-template-columns: 1fr;
}

    li{
        display: flex;
        flex-direction: row;
        gap: 16px;
        align-items: center;

    p{
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 0;
        color: ${Color.verdeSecundary}
    }
    }
}
`