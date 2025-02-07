import { Interface, Texto, Title } from "../../../styles/Global";
import { Color } from "../../../styles/variaveis";
import * as s from "./style";

// components
import ButtonHero from "../../buttonHero";

export default function Hero() {
  return (
    <s.StyleHero>
      <Interface>
        <div className="hero_container">
          <Title color={Color.BrancoFundo} colorSpan={Color.BrancoFundo}>
            Descubra por que o <span>Pesquisa Ativa</span> está{" "}
            <span>revolucionando</span> o mundo dos negócios!
          </Title>
          <div className="hero_container_content">
            <Texto color={Color.cinza} colorSpan={Color.BrancoFundo}>
              fornecer insights valiosos que auxiliem na tomada de decisões
              estratégicas, desenvolvimento de produtos e identificação de
              oportunidades de mercado.
            </Texto>
            <ButtonHero
              text=" Quero agendar uma consultoria gratuita!"
              color={Color.BrancoFundo}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              }
            />
          </div>
        </div>
      </Interface>
    </s.StyleHero>
  );
}
