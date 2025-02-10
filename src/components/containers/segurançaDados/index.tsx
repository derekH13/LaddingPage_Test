import { useState } from "react";
import Accordion from "../../accordion";
import { Interface, Title } from "../../../styles/Global";
import { Color } from "../../../styles/variaveis";

import * as s from "./style";

export default function SegurançaDados() {
  const [accordion1, setAccordion1] = useState(false);
  const [accordion2, setAccordion2] = useState(false);
  const [accordion3, setAccordion3] = useState(false);
  const [accordion4, setAccordion4] = useState(false);

  const toogleAccordion = (num: string) => {
    if (num == "1") setAccordion1(!accordion1);
    if (num == "2") setAccordion2(!accordion2);
    if (num == "3") setAccordion3(!accordion3);
    if (num == "4") setAccordion4(!accordion4);
  };

  return (
    <s.StyleDados>
      <Interface>
        <Title
          color={Color.black}
          colorSpan={Color.verdeSecundary}
          tamanho="middle"
          weight={600}
        >
          Segurança de <span>Dados</span>
        </Title>
        <div className="conatiner_accordion">
          <Accordion
            number="1"
            clicado={toogleAccordion}
            isActive={accordion1}
            title="Conformidade com a LGPD"
            texto={
              <>
                <p>
                  A nossa política de privacidade e práticas de segurança estão
                  em conformidade com a LGPD, que assegura os direitos dos
                  indivíduos em relação aos seus dados pessoais. Isso significa
                  que:
                </p>
                <ul>
                  <li>
                    <span>Consentimento explícito: </span>{" "}
                    <p>
                      Coletamos e tratamos dados pessoais somente com o
                      consentimento explícito dos usuários.
                    </p>
                  </li>
                  <li>
                    <span>Finalidade específica: </span>{" "}
                    <p>
                      Utilizamos dados pessoais apenas para as finalidades
                      informadas no momento da coleta.
                    </p>
                  </li>
                  <li>
                    <span>Transparência: </span>{" "}
                    <p>
                      Oferecemos acesso claro e transparente sobre como e por
                      que seus dados estão sendo processados.
                    </p>
                  </li>
                  <li>
                    <span>Direitos do titular: </span>{" "}
                    <p>
                      Os usuários podem solicitar acesso, correção, exclusão ou
                      portabilidade de seus dados pessoais.
                    </p>
                  </li>
                </ul>
              </>
            }
          />{" "}
          <Accordion
            number="2"
            clicado={toogleAccordion}
            isActive={accordion2}
            title="Certificações de Segurança"
            texto={
              <>
                <p>
                  Para garantir a integridade e a confidencialidade dos dados
                  pessoais, adotamos medidas de segurança robustas e mantemos as
                  seguintes certificações e práticas de segurança:
                </p>
                <ul>
                  <li>
                    <span>Criptografia de dados: </span>{" "}
                    <p>
                      Todos os dados sensíveis são criptografados tanto em
                      trânsito quanto em repouso para evitar acessos não
                      autorizados.
                    </p>
                  </li>
                  <li>
                    <span>Certificação ISO 27001: </span>{" "}
                    <p>
                      A nossa empresa segue as melhores práticas de gestão de
                      segurança da informação, conforme a norma internacional
                      ISO 27001, para proteger a integridade dos dados
                      armazenados e em processo.
                    </p>
                  </li>
                  <li>
                    <span>Auditorias regulares: </span>{" "}
                    <p>
                      {" "}
                      Realizamos auditorias e testes regulares de segurança para
                      identificar e corrigir possíveis vulnerabilidades no
                      sistema.
                    </p>
                  </li>
                </ul>
              </>
            }
          />
          <Accordion
            number="3"
            clicado={toogleAccordion}
            isActive={accordion3}
            title="Gestão de Incidentes de Segurança"
            texto={
              <>
                <p>
                  Em caso de incidente de segurança envolvendo dados pessoais,
                  seguimos um protocolo estabelecido para notificar rapidamente
                  os usuários afetados e as autoridades competentes, conforme
                  exigido pela LGPD.
                </p>
              </>
            }
          />
          <Accordion
            number="4"
            clicado={toogleAccordion}
            isActive={accordion4}
            title="Proteção dos Dados Sensíveis"
            texto={
              <>
                <p>
                  Nosso sistema é projetado para proteger dados sensíveis, como
                  informações bancárias, números de documentos, e qualquer outro
                  dado que requeira um nível mais elevado de segurança.
                  Utilizamos práticas como autenticação multifatorial para
                  reforçar a proteção de acessos a esses dados.
                </p>
              </>
            }
          />
        </div>
      </Interface>
    </s.StyleDados>
  );
}
