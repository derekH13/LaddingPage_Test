import { Interface, Title } from "../../../styles/Global";
import { Color } from "../../../styles/variaveis";

import * as s from "./style";

export default function Razoes() {
  return (
    <Interface>
      <s.StyleRazoes>
        <div className="razoes_introducao">
          <Title
            weight={500}
            color={Color.black}
            colorSpan={Color.verdeSecundary}
            tamanho="middle"
          >
            5 <span>razões</span> para você conhecer melhor o Pesquisa{" "}
            <span>Ativa!</span>
          </Title>
          <p>
            No mundo dos negócios de hoje, a capacidade de tomar decisões
            rápidas e informadas é crucial para o sucesso. O Pesquisa Ativa é a
            solução que sua empresa precisa para transformar dados em insights
            estratégicos valiosos. Além de otimizar suas decisões e melhorar a
            eficiência operacional, a Pesquisa Ativa pode ser um aliado poderoso
            na redução de custos
          </p>
        </div>
        <ul className="razoes_lista">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              fill={Color.verdeSecundary}
              className="bi bi-file-lock"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 5a1 1 0 0 1 1 1v1H7V6a1 1 0 0 1 1-1m2 2.076V6a2 2 0 1 0-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224M6.105 8.125A.64.64 0 0 1 6.5 8h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.64.64 0 0 1 9.5 11h-3a.64.64 0 0 1-.395-.125C6.02 10.807 6 10.742 6 10.7V8.3c0-.042.02-.107.105-.175"
                stroke-width=".5"
                stroke={Color.verdeSecundary}
              />
              <path
                stroke-width=".5"
                stroke={Color.verdeSecundary}
                d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"
              />
            </svg>
            <p>Decisões Baseadas em Dados Confiáveis</p>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              fill={Color.verdeSecundary}
              className="bi bi-shop"
              viewBox="0 0 16 16"
            >
              <path
                stroke-width=".5"
                stroke={Color.verdeSecundary}
                d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z"
              />
            </svg>
            <p>Identificação de Oportunidades de Mercado</p>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              fill={Color.verdeSecundary}
              className="bi bi-bag"
              viewBox="0 0 16 16"
            >
              <path
                stroke-width=".5"
                stroke={Color.verdeSecundary}
                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"
              />
            </svg>
            <p>Desenvolvimento de Produtos Lucrativos</p>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              fill={Color.verdeSecundary}
              className="bi bi-graph-up-arrow"
              viewBox="0 0 16 16"
            >
              <path
                stroke-width=".5"
                stroke={Color.verdeSecundary}
                fill-rule="evenodd"
                d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"
              />
            </svg>
            <p>Vantagem Competitiva</p>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              fill={Color.verdeSecundary}
              className="bi bi-graph-down-arrow"
              viewBox="0 0 16 16"
            >
              <path
                stroke-width=".5"
                stroke={Color.verdeSecundary}
                fill-rule="evenodd"
                d="M0 0h1v15h15v1H0zm10 11.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.6l-3.613-4.417a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61L13.445 11H10.5a.5.5 0 0 0-.5.5"
              />
            </svg>
            <p>Redução de Riscos e Custos Desnecessários</p>
          </li>
        </ul>
      </s.StyleRazoes>
    </Interface>
  );
}
