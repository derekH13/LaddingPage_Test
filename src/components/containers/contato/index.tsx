import Form from "../../form";

import * as s from "./style";
import { Interface } from "../../../styles/Global";

export default function Contato() {
  return (
    <Interface id="contato">
      <s.StyleContato>
        <img
          src="https://i.im.ge/2025/02/10/H01W8F.mapa.jpeg"
          alt="Imagem de uma lupa posicionada sobre um mapa, com a lente focalizando uma pequena casa no mapa. A lupa amplia a área ao redor da casa, destacando-a em meio ao restante do mapa. "
        />
        <Form />
      </s.StyleContato>
    </Interface>
  );
}
