import React from "react";
import { Interface, Title } from "../../../styles/Global";
import { Color } from "../../../styles/variaveis";
import ButtonHero from "../../buttonHero";

import * as s from "./style";
import CarrosselSolucoes from "../../carrosselSolucoes";

export default function Solucoes() {
  return (
    <s.StyleSolucoes>
      <Interface>
        <div className="titulo">
          <Title color={Color.black} colorSpan={Color.verdeSecundary}>
            Soluções
          </Title>
          <ButtonHero
            key={11}
            color={Color.verdeSecundary}
            text="Nossos Prodissionais"
            icon=""
            width="max-content"
            radiusButton={10}
            borderColor={Color.verdeSecundary}
          />
        </div>
        <div>
          <CarrosselSolucoes />
        </div>
      </Interface>
    </s.StyleSolucoes>
  );
}
