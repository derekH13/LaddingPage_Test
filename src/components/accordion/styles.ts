import styled from "styled-components";
import { Color } from "../../styles/variaveis";

export type propsAccordion = {
    isActive: boolean;
};

export const StyleAccordion = styled.div<propsAccordion>`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  overflow: hidden;

  &:hover{
    .title{
      background-color: rgba(26,97,149, 0.2);
      border-radius: 10px;
    }
  }
  
  .accordion_content {
    margin-top: 1px;
    width: 100%;
    min-height: 50px;
    display: flex;
    align-items: center;
    padding-left: 8px;
    overflow: hidden;
    color: ${Color.black};
    border: solid 1px ${Color.verdeSecundary};
    border-radius: 8px;

    &.title {
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      font-weight: 600;
      color: ${Color.verdeSecundary};

      &.active{
        background-color: rgba(26,97,149, 0.2);
        border-radius: 10px;
      }
    }

    .item {
      border: none;
      background-color: ${Color.verdeSecundary};
      height: 53px;
      max-width: 70px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease; 

      @media(max-width: 640px){
        max-width: 50px;
      }

 
      &:hover {
        background-color: ${Color.black};

        svg {
          width: 35px;
          height: 35px;
        }
      }

      &.active {
        background-color: ${Color.black};

        svg {
          transform: rotate(180deg);
        }
      }

      svg {
        transition: transform 0.5s ease, background-color 1s ease, width 0.2s ease, height 0.2s ease;
      }
    }
  }

  .informacao {
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    padding: 16px 8px 8px 8px;

    ul{
        padding-left: 20px;

        li{
            span{
            font-weight: 700;
            }
        }
    }
  }
`;

