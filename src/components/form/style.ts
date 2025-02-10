import styled from "styled-components";
import { Color } from "../../styles/variaveis";
import { Title } from "../../styles/Global";
import { Formik } from "formik";

export const StyleForm = styled(Formik)`


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

`

export const StyleContainer = styled.div`
position: relative;

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



.checkbox{
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 8px 0px 40px 0px;

p{
    margin-bottom: 0px;
}

}
${Title}{
margin-bottom: 20px;
}

`