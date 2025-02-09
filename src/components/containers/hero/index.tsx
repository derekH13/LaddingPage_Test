// style
import { Interface, Texto, Title } from "../../../styles/Global";
import { Color } from "../../../styles/variaveis";
import * as s from "./style";

// components
import ButtonHero from "../../buttonHero";

// hooks
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";
import { mostarNav } from "../../../redux/reducer/mostarNav";
import { useEffect } from "react";

export default function Hero() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mostarNav(!inView));
  }, [inView]);

  return (
    <s.StyleHero
      id="hero"
      aria-label="Imagem de um tabuleiro de xadrez com quadrados alternados nas cores azul e laranja. O tabuleiro exibe um padrão geométrico, onde as casas azuis e laranjas são dispostas de forma regular e simétrica. A composição destaca as cores vibrantes, criando um contraste marcante entre os tons de azul e laranja."
    >
      <Interface>
        <div ref={ref} className="hero_container" id="hero_container">
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
            <a href="#contato">
              <ButtonHero
                text=" Agendar uma consultoria gratuita!"
                color={Color.BrancoFundo}
                borderColor={Color.BrancoFundo}
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
            </a>
          </div>
        </div>
      </Interface>
    </s.StyleHero>
  );
}
