import { Texto } from "../../styles/Global";
import { Color } from "../../styles/variaveis";

import * as s from "./style";

interface props {
  title: string;
  texto: string;
  column: "reverse" | "default";
}

export default function CardFaturar({ title, texto, column }: props) {
  return (
    <s.StyleCard Column={column}>
      <div className="cardFaturar_content">
        <h3>{title}</h3>
        <Texto color={Color.cinza} colorSpan={Color.BrancoFundo}>
          {texto}
        </Texto>
      </div>
    </s.StyleCard>
  );
}
