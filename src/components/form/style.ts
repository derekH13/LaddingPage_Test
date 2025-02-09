import styled from "styled-components";
import { Color } from "../../styles/variaveis";
import { Title } from "../../styles/Global";

export const StyleForm = styled.form`

.checkbox{
    display: flex;
    align-items: center;
    gap: 16px;
    padding-bottom: 40px;

p{
    margin-bottom: 0px;
}

}
${Title}{
margin-bottom: 20px;
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