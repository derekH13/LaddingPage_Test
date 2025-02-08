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
            colorSpan={Color.verdeSecundary}
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
                backgroundColor: Color.verdeSecundary,
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
                backgroundColor: Color.verdeSecundary,
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
                backgroundColor: Color.verdeSecundary,
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
                backgroundColor: Color.verdeSecundary,
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
                backgroundColor: Color.verdeSecundary,
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
                backgroundColor: Color.verdeSecundary,
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
                      fill={Color.verdeSecundary}
                      className="bi bi-signpost-2-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.293.707A1 1 0 0 0 7 1.414V2H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5v1H2.5a1 1 0 0 0-.8.4L.725 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4H7v5h2v-5h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H9V6h4.5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.3 2.4a1 1 0 0 0-.8-.4H9v-.586A1 1 0 0 0 7.293.707" />
                    </svg>
                  }
                  title="Tem insegurança em decisões estratégicas"
                  texto="Se você está hesitando em tomar decisões importantes para o futuro do seu negócio, o Pesquisa Ativa oferece insights baseados em dados reais do mercado."
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
                      className="bi bi-radar"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.634 1.135A7 7 0 0 1 15 8a.5.5 0 0 1-1 0 6 6 0 1 0-6.5 5.98v-1.005A5 5 0 1 1 13 8a.5.5 0 0 1-1 0 4 4 0 1 0-4.5 3.969v-1.011A2.999 2.999 0 1 1 11 8a.5.5 0 0 1-1 0 2 2 0 1 0-2.5 1.936v-1.07a1 1 0 1 1 1 0V15.5a.5.5 0 0 1-1 0v-.518a7 7 0 0 1-.866-13.847" />
                    </svg>
                  }
                  title="Precisa identificar oportunidades. "
                  texto="Se você deseja explorar novos nichos de mercado ou verificar o potencial de novos produtos, o Pesquisa Ativa fornece uma visão clara e objetiva sobre as tendências e necessidades do público."
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
                      className="bi bi-people-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                    </svg>
                  }
                  title="Busca entender seu público-alvo"
                  texto="Com as pesquisas da Pesquisa Ativa, você pode segmentar seu público de forma precisa e tomar decisões mais assertivas sobre marketing e desenvolvimento de produtos."
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
                      className="bi bi-piggy-bank-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069q0-.218-.02-.431c.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a1 1 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.74.74 0 0 0-.375.562c-.024.243.082.48.32.654a2 2 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595m7.173 3.876a.6.6 0 0 1-.098.21l-.044-.025c-.146-.09-.157-.175-.152-.223a.24.24 0 0 1 .117-.173c.049-.027.08-.021.113.012a.2.2 0 0 1 .064.199m-8.999-.65a.5.5 0 1 1-.276-.96A7.6 7.6 0 0 1 7.964 3.5c.763 0 1.497.11 2.18.315a.5.5 0 1 1-.287.958A6.6 6.6 0 0 0 7.964 4.5c-.64 0-1.255.09-1.826.254ZM5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0" />
                    </svg>
                  }
                  title="Deseja reduzir os riscos financeiros"
                  texto="Investir em estratégias sem dados concretos pode resultar em perdas financeiras. Com a Pesquisa Ativa, você minimiza o risco ao fundamentar suas ações em dados de mercado confiáveis."
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
                      className="bi bi-box-seam-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003zM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461z"
                      />
                    </svg>
                  }
                  title="busca um produto eficaz"
                  texto="Antes de lançar um novo produto ou serviço, é essencial validar a aceitação do mercado. O Pesquisa Ativa permite que você teste e refine suas ideias antes de investir grandes recursos."
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
