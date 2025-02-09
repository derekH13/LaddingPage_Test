import React from "react";
import { Texto, Title } from "../../styles/Global";
import { Color } from "../../styles/variaveis";

import * as s from "./style";
import ButtonHero from "../buttonHero";

export interface props {
  icon?: React.ReactNode;
  title: string;
  texto: string;
  colorTitle?: "verdeSecundary" | "black";
  textButton?: string;
  numeroCard?: string;
  bgButton?: string;
  radiusButton?: number;
  colorButton?: string;
}

export default function Card({
  icon,
  title,
  texto,
  textButton,
  numeroCard,
  bgButton,
  radiusButton,
  colorButton,
}: props) {
  if (textButton && textButton.length > 1) {
    console.log(textButton);
  }
  return (
    <s.styleCard textButton={numeroCard}>
      {icon}
      <Title
        weight={500}
        color={Color.verdeSecundary}
        colorSpan={Color.verdeSecundary}
        tamanho="middle"
      >
        {title}
      </Title>
      <Texto
        color={Color.cinzaSecundary}
        colorSpan={Color.verdeSecundary}
        tamanho="middle"
      >
        {texto}
      </Texto>
      <div className="card_button">
        {textButton && textButton.length > 1 && (
          <ButtonHero
            color={colorButton}
            text={textButton}
            bgColor={bgButton}
            radiusButton={radiusButton}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                className="bi bi-chat-left-text"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
              </svg>
            }
          />
        )}
      </div>

      {numeroCard && <div className="circulo">{numeroCard}</div>}
    </s.styleCard>
  );
}
