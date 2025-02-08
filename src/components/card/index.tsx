import React from "react";
import { Texto, Title } from "../../styles/Global";
import { Color } from "../../styles/variaveis";

import * as s from "./style";

interface props {
  icon?: React.ReactNode;
  title: string;
  texto: string;
}

export default function Card({ icon, title, texto }: props) {
  console.log(icon);
  return (
    <s.styleCard>
      {icon}
      <Title
        color={Color.verdeSecundary}
        colorSpan={Color.verdeSecundary}
        tamanho="middle"
      >
        <span>{title}</span>
      </Title>
      <Texto
        color={Color.cinzaSecundary}
        colorSpan={Color.verdeSecundary}
        tamanho="middle"
      >
        {texto}
      </Texto>
    </s.styleCard>
  );
}
