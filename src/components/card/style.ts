import styled from "styled-components";
import { Texto, Title } from "../../styles/Global";


export const styleCard = styled.div`
min-height: 422px;
height: max-content;
width: 333px;
position: relative;
border-radius: 20px;
background-color:rgb(243, 243, 243) ;
padding: 30px 20px 10px 20px;

${Title}{
margin-top: 8px;
min-height: 74px;

}

${Texto}{
    font-weight: 400;
}
`