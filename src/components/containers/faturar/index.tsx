// objetos
import { objFAturar1, objFAturar2 } from "../../../data";

// styles
import { ContainerInfo, Interface, Title } from "../../../styles/Global";
import { Color } from "../../../styles/variaveis";

// components
import { StyleContainer } from "./style";
import CardFaturar from "../../card_faturar";

export default function Faturar() {
  return (
    <ContainerInfo bg={Color.verdePrimary}>
      <Interface>
        <StyleContainer>
          <Title
            color={Color.BrancoFundo}
            colorSpan={Color.BrancoFundo}
            tamanho="middle"
          >
            Como <span>faturar</span> mais com o Pesquisa Ativa?
          </Title>
          <div className="faturar_content">
            {objFAturar1.map((item) => (
              <CardFaturar
                column={item.column}
                img={item.img}
                texto={item.texto}
                title={item.title}
              />
            ))}
          </div>
          <div className="faturar_content">
            {objFAturar2.map((item) => (
              <CardFaturar
                column={item.column}
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
