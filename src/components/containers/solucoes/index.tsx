// style
import { Interface, Title } from "../../../styles/Global";
import { Color } from "../../../styles/variaveis";
import ButtonHero from "../../buttonHero";
import * as s from "./style";

// obj
import { objSolucoes } from "../../../data";

//  components
import CarrosselDesktop from "../../carrosselDesktop";
import CarosselMobille from "../../carrosselMobille";

export default function Solucoes() {
  return (
    <s.StyleSolucoes id="solucoes">
      <Interface>
        <div className="titulo">
          <Title color={Color.BrancoFundo} colorSpan={Color.verdeSecundary}>
            Soluções
          </Title>
          <ButtonHero
            key={11}
            color={Color.BrancoFundo}
            text="Nossos Prodissionais"
            icon=""
            width="max-content"
            radiusButton={10}
            borderColor={Color.BrancoFundo}
          />
        </div>

        <div className="desktop">
          <CarrosselDesktop
            corIndicador={Color.BrancoFundo}
            id="solucoesCarrossel"
            obj={objSolucoes}
          />
        </div>
        <div className="mobille">
          <CarosselMobille
            corIndicador={Color.BrancoFundo}
            isSolucoes={true}
            obj={objSolucoes}
            id="solucoesCarrosselM"
          />
        </div>
      </Interface>
    </s.StyleSolucoes>
  );
}
