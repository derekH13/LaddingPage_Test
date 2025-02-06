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
        color={Color.verdePrimary}
        colorSpan={Color.verdePrimary}
        tamanho="middle"
      >
        <span>{title}</span>
      </Title>
      <Texto
        color={Color.cinzaSecundary}
        colorSpan={Color.verdePrimary}
        tamanho="middle"
      >
        {texto}
      </Texto>
    </s.styleCard>
  );
}
