import styled from "styled-components";

export const StyleContato = styled.section`
min-height: max-content;
width: 100%;
display: grid;
grid-template-columns: auto 490px;
gap: 24px;
padding: 80px 0px;

@media(max-width: 1080px){
grid-template-columns: 1fr;
}

> img{
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 10px;

@media(max-width: 1080px){
display: none;
}
}

`