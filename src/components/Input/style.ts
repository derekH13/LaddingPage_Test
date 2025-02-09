import styled from "styled-components";
import { Color } from "../../styles/variaveis";

export const InputStyle = styled.div`
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

    input, textarea{
        background-color: #eeeded;
        border: none;
        margin-bottom: .8rem;
        padding: 12px .7rem;
        width: 100%;
        border-radius: 8px;
    }

    textarea{
    min-height: 100px;

    }

      input:focus, textarea:focus {
        outline: none; 
        border-color:${Color.verdeSecundary}; 
        box-shadow: 0 0 5px ${Color.verdeSecundary};
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