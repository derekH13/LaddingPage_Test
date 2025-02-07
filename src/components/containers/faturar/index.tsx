// objetos
import { objFAturar1, objFAturar2 } from "../../../data";

// styles
import { ContainerInfo, Interface } from "../../../styles/Global";
import { Color } from "../../../styles/variaveis";

// components
import { StyleContainer } from "./style";
import CardFaturar from "../../card_faturar";

export default function Faturar() {
  return (
    <ContainerInfo bg={Color.verdePrimary}>
      <Interface>
        <StyleContainer>
          <div className="faturar_content">
            {objFAturar1.map((item) => (
              <CardFaturar
                column="reverse"
                img={item.img}
                texto={item.texto}
                title={item.title}
              />
            ))}
          </div>
          <div className="faturar_content">
            {objFAturar2.map((item) => (
              <CardFaturar
                column="reverse"
                img={item.img}
                texto={item.texto}
                title={item.title}
              />
            ))}
          </div>
        </StyleContainer>
      </Interface>
    </ContainerInfo>
  );
}
