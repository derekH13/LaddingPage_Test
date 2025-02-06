import React from "react";
import Card from "../../card";
import { Interface, Title } from "../../../styles/Global";

import * as s from "./style";
import { Color } from "../../../styles/variaveis";

export default function Situacoes() {
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
        <div id="carouselExampleIndicators" className="carousel slide mt-5">
          <div className="carousel-indicators " style={{ bottom: -70 }}>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
              style={{
                backgroundColor: Color.cinza,
                height: 20,
                width: 20,
                borderRadius: "50%",
              }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              style={{
                backgroundColor: Color.cinza,
                height: 20,
                width: 20,
                borderRadius: "50%",
              }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              style={{
                backgroundColor: Color.cinza,
                height: 20,
                width: 20,
                borderRadius: "50%",
              }}
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item  active">
              <s.containerCarroousel>
                <Card
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      fill={Color.verdePrimary}
                      className="bi bi-signpost-2-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.293.707A1 1 0 0 0 7 1.414V2H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5v1H2.5a1 1 0 0 0-.8.4L.725 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4H7v5h2v-5h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H9V6h4.5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.3 2.4a1 1 0 0 0-.8-.4H9v-.586A1 1 0 0 0 7.293.707" />
                    </svg>
                  }
                  title="Tem insegurança em decisões estratégicas"
                  texto="Se você está hesitando em tomar decisões importantes para o futuro do seu negócio, o Pesquisa Ativa oferece insights baseados em dados reais do mercado, ajudando a diminuir a margem de erro e aumentar a confiança nas suas escolhas."
                />
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
                  title="Precisa identificar oportunidades "
                  texto="Se você deseja explorar novos nichos de mercado ou verificar o potencial de novos produtos, o Pesquisa Ativa fornece uma visão clara e objetiva sobre as tendências e necessidades do público."
                />
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
                  texto="Conhecer o comportamento e as expectativas dos seus clientes é fundamental para o sucesso. Com as pesquisas da Pesquisa Ativa, você pode segmentar seu público de forma precisa e tomar decisões mais assertivas sobre marketing e desenvolvimento de produtos."
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
                  title="busca desenvolvimento de um produto eficaz"
                  texto="Antes de lançar um novo produto ou serviço, é essencial validar a aceitação do mercado. O Pesquisa Ativa permite que você teste e refine suas ideias antes de investir grandes recursos."
                />
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
                      className="bi bi-speedometer"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2M3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.39.39 0 0 0-.029-.518z" />
                      <path
                        fill-rule="evenodd"
                        d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.95 11.95 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0"
                      />
                    </svg>
                  }
                  title="Precisa tomar decisões rápidas"
                  texto="Quando a agilidade é essencial, mas você não pode abrir mão da precisão, a Pesquisa Ativa oferece resultados rápidos e altamente confiáveis, permitindo decisões informadas em tempo hábil."
                />
                <Card
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      fill={Color.verdePrimary}
                      className="bi bi-building-up"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 0 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0" />
                      <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6.5a.5.5 0 0 1-1 0V1H3v14h3v-2.5a.5.5 0 0 1 .5-.5H8v4H3a1 1 0 0 1-1-1z" />
                      <path d="M4.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
                    </svg>
                  }
                  title="Quer aumentar sua competitividade"
                  texto="Em um mercado dinâmico, inovar é crucial para se manter competitivo. As pesquisas da Pesquisa Ativa ajudam você a entender as novas tendências e a desenvolver soluções criativas que atendem às necessidades do mercado."
                />
                <Card
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      fill={Color.verdePrimary}
                      className="bi bi-gear-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                    </svg>
                  }
                  title="Quer otimizar recursos e investimentos"
                  texto="Se você deseja alocar seus recursos de maneira mais eficiente, evitando desperdícios em estratégias e projetos sem retorno, o Pesquisa Ativa oferece dados que permitem direcionar seus investimentos para as áreas com maior potencial de sucesso."
                />
              </s.containerCarroousel>
            </div>
          </div>
          <button
            className="carousel-control-prev justify-content-start"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill={Color.verdePrimary}
                className="bi bi-chevron-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                />
              </svg>
            </span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next justify-content-end"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill={Color.verdePrimary}
                className="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                />
              </svg>
            </span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </Interface>
    </s.situacoesStyle>
  );
}
