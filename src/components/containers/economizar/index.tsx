// style
import * as s from "./style";
import { Interface, Texto, Title } from "../../../styles/Global";
import { Color } from "../../../styles/variaveis";

export default function Economizar() {
  return (
    <s.EconomizarStyle aria-label="Imagem de uma reunião de empresários em uma sala de conferências. Há várias pessoas ao redor de uma mesa de reunião, discutindo ou analisando documentos. Ao fundo, uma janela de vidro exibe uma vista para o exterior.">
      <Interface>
        <div className="economizar_content">
          <s.Content>
            <Title
              color={Color.BrancoFundo}
              colorSpan={Color.verdeSecundary}
              tamanho="middle"
            >
              Como <span>economizar</span> com o Pesquisa Ativa?
            </Title>
            <Texto color={Color.cinza} colorSpan={Color.BrancoFundo}>
              A Pesquisa Ativa ajuda a economizar identificando e evitando
              investimentos desnecessários em produtos ou serviços sem
              potencial. Ao testar ideias com o público-alvo antes de grandes
              investimentos, é possível validar conceitos e ajustar o
              desenvolvimento, evitando falhas caras.
            </Texto>

            <s.topicosStyle>
              <ul>
                <li>
                  Validação de Ideias Antes do Lançamento{" "}
                  <span>
                    Teste de conceitos para evitar investimentos em produtos sem
                    aceitação.
                  </span>
                </li>
                <li>
                  Análise de Viabilidade de Mercado{" "}
                  <span>
                    Direcionamento de recursos para produtos com demanda real.
                  </span>
                </li>
                <li>
                  Ajustes no Desenvolvimento{" "}
                  <span>
                    Feedback contínuo para ajustar o produto e evitar falhas
                    caras.
                  </span>
                </li>
                <li>
                  Minimização de Riscos{" "}
                  <span>
                    {" "}
                    Dados sobre comportamento do consumidor ajudam a reduzir
                    riscos e tomar decisões mais seguras.
                  </span>
                </li>
              </ul>
            </s.topicosStyle>
          </s.Content>
        </div>
      </Interface>
    </s.EconomizarStyle>
  );
}
