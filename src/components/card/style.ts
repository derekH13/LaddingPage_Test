import styled from "styled-components";
import { Texto, Title } from "../../styles/Global";


export const styleCard = styled.div`
min-height: 422px;
height: max-content;
width: 360px;
position: relative;
border-radius: 20px;
background-color: #F8F8F8 ;
padding: 30px 20px 10px 20px;

${Title}{
margin-top: 8px;
min-height: 74px;

}

${Texto}{
    font-weight: 400;
}
`