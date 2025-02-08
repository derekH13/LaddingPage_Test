import styled from "styled-components";
import { Color } from "../../styles/variaveis";

export const inputStyle = styled.div`
    display: flex;
    flex-direction: column;

label{
    font-size: .8rem;
    font-weight: 400;
    padding-bottom: .5rem;
    padding-left: .7rem;
    color: ${Color.black}
    
}

.container-input{
    position: relative;

    input{
        background-color: #eeeded;
        border: none;
        margin-bottom: .8rem;
        padding: 12px .7rem;
        width: 100%;
        border-radius: 8px;
    }
}

.input-ladding svg{
    position: absolute;
    right: 15px;
    opacity: 0.8;
    display: flex;
    align-items: center;
    height: 83%;
    top: 0;
}

`