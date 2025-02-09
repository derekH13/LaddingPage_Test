import styled from "styled-components";
import { Color } from "../../../styles/variaveis";

export const footerStyle = styled.footer`
width: 100%;
height: max-content;
background-color: ${Color.verdeSecundary};
padding: 40px 20px;


.termos{
margin-top: 16px;

p{
    font-size: 13px;
    margin: 0;
    font-weight: 500;
    color: ${Color.black}
}
}

.footer_content{
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 980px){
        flex-direction: column;
        gap: 10px;
        align-items: start;
    }

    ul{
    display: flex;
    gap: 16px;
    
    @media(max-width: 980px){
        margin-top: 8px;
        justify-content: start;
        padding-left: 0px;

    }


    li{
    list-style: none;
    }
    }

    &_contato{
    display: flex;
    gap: 20px;
    font-size: 16px;
    color: ${Color.black};

    @media(max-width: 980px){
    flex-direction: column;
    gap: 10px;
    }

    p{
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 0px;
    }

    &_item{
        span{
        font-weight: 700;
        }
    }

}
}
`