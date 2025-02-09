import CarrosselDesktop from "../../carrosselDesktop";
import CarosselMobille from "../../carrosselMobille";

import { objPesquisaAtiva } from "../../../data";

import * as s from "./style";
import { Title } from "../../../styles/Global";
import { Color } from "../../../styles/variaveis";

export default function Situacoes() {
  return (
    <s.StyleMedia>
      <div className="situacoes_title">
        <Title
          color={Color.cinzaSecundary}
          colorSpan={Color.verdeSecundary}
          tamanho="middle"
          weight={500}
        >
          O <span>Pesquisa Ativa</span> é para você que...
        </Title>
      </div>
      <div className="desktop">
        <CarrosselDesktop
          corIndicador={Color.verdeSecundary}
          id="situacoes"
          obj={objPesquisaAtiva}
        />
      </div>
      <div className="mobille">
        <CarosselMobille
          corIndicador={Color.verdeSecundary}
          obj={objPesquisaAtiva}
          isSolucoes={false}
          id="situacoesM"
        />
      </div>
    </s.StyleMedia>
  );
}
