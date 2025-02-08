import styled from "styled-components";
import { Color } from "../../styles/variaveis";

export const StyleForm = styled.form`

.checkbox{
display: flex;
align-items: center;
gap: 16px;

p{
margin-bottom: 0px;
}
}

.form_logo{
display: flex;
align-items: center;
gap: 16px;
margin-bottom: 36px;

color: ${Color.black};
font-size: 28px;
font-weight: 600;

img{
    width: 50px;
}
}
`