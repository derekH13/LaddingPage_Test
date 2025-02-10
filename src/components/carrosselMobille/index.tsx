// style
import { Interface } from "../../styles/Global";
import { Color } from "../../styles/variaveis";
import * as s from "../containers/situacoes/style";

// components
import Card from "../card";

import { propsPesquisaAtiva } from "../../interface";

interface props {
  obj: propsPesquisaAtiva[];
  isSolucoes: boolean;
  id: string;
  corIndicador: string;
}

export default function CarosselMobille({
  obj,
  isSolucoes,
  id,
  corIndicador,
}: props) {
  const objSlice = obj && Array.isArray(obj) ? obj.slice(1) : [];

  return (
    <s.situacoesStyle>
      <Interface>
        <div id={id} className="carousel slide ">
          <div className="carousel-indicators " style={{ bottom: -70 }}>
            <button
              type="button"
              data-bs-target={`#${id}`}
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
              style={{
                backgroundColor: corIndicador,
                height: 15,
                width: 15,
                borderRadius: "50%",
              }}
            ></button>
            <button
              type="button"
              data-bs-target={`#${id}`}
              data-bs-slide-to="1"
              aria-label="Slide 2"
              style={{
                backgroundColor: corIndicador,
                height: 15,
                width: 15,
                borderRadius: "50%",
              }}
            ></button>
            <button
              type="button"
              data-bs-target={`#${id}`}
              data-bs-slide-to="2"
              aria-label="Slide 3"
              style={{
                backgroundColor: corIndicador,
                height: 15,
                width: 15,
                borderRadius: "50%",
              }}
            ></button>
            <button
              type="button"
              data-bs-target={`#${id}`}
              data-bs-slide-to="3"
              aria-label="Slide 4"
              style={{
                backgroundColor: corIndicador,
                height: 15,
                width: 15,
                borderRadius: "50%",
              }}
            ></button>
            <button
              type="button"
              data-bs-target={`#${id}`}
              data-bs-slide-to="4"
              aria-label="Slide 5"
              style={{
                backgroundColor: corIndicador,
                height: 15,
                width: 15,
                borderRadius: "50%",
              }}
            ></button>
            <button
              type="button"
              data-bs-target={`#${id}`}
              data-bs-slide-to="5"
              aria-label="Slide 6"
              style={{
                backgroundColor: corIndicador,
                height: 15,
                width: 15,
                borderRadius: "50%",
              }}
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <s.containerCarroousel>
                {isSolucoes ? (
                  <Card
                    texto=" Análise voltada para entender como um produto, serviço ou conceito é recebido pelo público. Esse tipo de pesquisa mede a disposição do consumidor em adotar algo novo, identificando barreiras e motivações que podem impactar sua aceitação."
                    title="Pesquisa de Aceitação"
                    textButton="Falar com Consultor"
                    numeroCard="1"
                    bgButton={Color.verdeSecundary}
                    radiusButton={10}
                    colorButton={Color.BrancoFundo}
                  />
                ) : (
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
                )}
              </s.containerCarroousel>
            </div>

            {objSlice.map((item, index) => (
              <div className="carousel-item">
                <s.containerCarroousel>
                  <Card
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    texto={item.texto}
                    radiusButton={item.radiusButton}
                    bgButton={item.bgButton}
                    colorButton={item.colorButton}
                    textButton={item.textButton}
                    numeroCard={item.numeroCard}
                  />
                </s.containerCarroousel>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={`#${id}`}
            data-bs-slide="prev"
          >
            <span aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill={Color.verdeSecundary}
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
            onClick={() => console.log("dddddddddddddddddddddddddddddddddd")}
            style={{ zIndex: 10 }}
            className="carousel-control-next"
            type="button"
            data-bs-target={`#${id}`}
            data-bs-slide="next"
          >
            <span aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill={Color.verdeSecundary}
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
