import { JSX } from "react";

export type TitleProps = {
  color: string;
  colorSpan: string;
  tamanho?: "middle" | "default";
  weight?: number;
};

export type PropsContainer = {
  bg: string;
};

export interface propsCarrossel {
  obj: propsPesquisaAtiva[];
  isSolucoes?: boolean;
  id: string;
  corIndicador: string;
}

export interface propsFaturar {
  title: string;
  texto: string;
  img: string;
  column: "default" | "reverse";
}

export type propsPesquisaAtiva = {
  icon?: JSX.Element;
  title: string;
  texto: string;
  textButton?: string;
  numeroCard?: string;
  bgButton?: string;
  radiusButton?: number;
  colorButton?: string;
};
