// style
import { Interface, Title } from "../../styles/Global";
import { Color } from "../../styles/variaveis";
import Card from "../card";
import * as s from "../containers/situacoes/style";

// components

export default function CarosselMobille() {
  return (
    <s.situacoesStyle>
      <Interface>
        <div className="situacoes_title">
          <Title
            color={Color.cinzaSecundary}
            colorSpan={Color.verdePrimary}
            tamanho="middle"
            weight={500}
          >
            O <span>Pesquisa Ativa</span> é para você que...
          </Title>
        </div>
        <div id="carouselExampleIndicator" className="carousel slide mt-5">
          <div className="carousel-indicators " style={{ bottom: -70 }}>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicator"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
              style={{
                backgroundColor: Color.verdePrimary,
                height: 15,
                width: 15,
                borderRadius: "50%",
              }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicator"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              style={{
                backgroundColor: Color.verdePrimary,
                height: 15,
                width: 15,
                borderRadius: "50%",
              }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicator"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              style={{
                backgroundColor: Color.verdePrimary,
                height: 15,
                width: 15,
                borderRadius: "50%",
              }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicator"
              data-bs-slide-to="3"
              aria-label="Slide 4"
              style={{
                backgroundColor: Color.verdePrimary,
                height: 15,
                width: 15,
                borderRadius: "50%",
              }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicator"
              data-bs-slide-to="4"
              aria-label="Slide 5"
              style={{
                backgroundColor: Color.verdePrimary,
                height: 15,
                width: 15,
                borderRadius: "50%",
              }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicator"
              data-bs-slide-to="5"
              aria-label="Slide 6"
              style={{
                backgroundColor: Color.verdePrimary,
                height: 15,
                width: 15,
                borderRadius: "50%",
              }}
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <s.containerCarroousel>
                <Card
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      fill={Color.verdePrimary}
                      className="bi bi-graph-up-arrow"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"
                      />
                    </svg>
                  }
                  title="Quer superar a concorrência"
                  texto="O Pesquisa Ativa ajuda você a compreender como sua empresa se posiciona em relação aos concorrentes, identificando pontos fortes a serem explorados e oportunidades de melhoria."
                />
              </s.containerCarroousel>
            </div>
            <div className="carousel-item">
              <s.containerCarroousel>
                <Card
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      fill={Color.verdePrimary}
                      className="bi bi-graph-up-arrow"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"
                      />
                    </svg>
                  }
                  title="Quer superar a concorrência"
                  texto="O Pesquisa Ativa ajuda você a compreender como sua empresa se posiciona em relação aos concorrentes, identificando pontos fortes a serem explorados e oportunidades de melhoria."
                />
              </s.containerCarroousel>
            </div>
            <div className="carousel-item">
              <s.containerCarroousel>
                <Card
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      fill={Color.verdePrimary}
                      className="bi bi-graph-up-arrow"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"
                      />
                    </svg>
                  }
                  title="Quer superar a concorrência"
                  texto="O Pesquisa Ativa ajuda você a compreender como sua empresa se posiciona em relação aos concorrentes, identificando pontos fortes a serem explorados e oportunidades de melhoria."
                />
              </s.containerCarroousel>
            </div>
            <div className="carousel-item">
              <s.containerCarroousel>
                <Card
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      fill={Color.verdePrimary}
                      className="bi bi-graph-up-arrow"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"
                      />
                    </svg>
                  }
                  title="Quer superar a concorrência"
                  texto="O Pesquisa Ativa ajuda você a compreender como sua empresa se posiciona em relação aos concorrentes, identificando pontos fortes a serem explorados e oportunidades de melhoria."
                />
              </s.containerCarroousel>
            </div>
            <div className="carousel-item">
              <s.containerCarroousel>
                <Card
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      fill={Color.verdePrimary}
                      className="bi bi-graph-up-arrow"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"
                      />
                    </svg>
                  }
                  title="Quer superar a concorrência"
                  texto="O Pesquisa Ativa ajuda você a compreender como sua empresa se posiciona em relação aos concorrentes, identificando pontos fortes a serem explorados e oportunidades de melhoria."
                />
              </s.containerCarroousel>
            </div>
            <div className="carousel-item">
              <s.containerCarroousel>
                <Card
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      fill={Color.verdePrimary}
                      className="bi bi-graph-up-arrow"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"
                      />
                    </svg>
                  }
                  title="Quer superar a concorrência"
                  texto="O Pesquisa Ativa ajuda você a compreender como sua empresa se posiciona em relação aos concorrentes, identificando pontos fortes a serem explorados e oportunidades de melhoria."
                />
              </s.containerCarroousel>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicator"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicator"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </Interface>
    </s.situacoesStyle>
  );
}
