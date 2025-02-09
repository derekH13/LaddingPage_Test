//  style
import { Color } from "../../styles/variaveis";
import { Interface } from "../../styles/Global";

// components
import Card from "../card";
import * as s from "../containers/situacoes/style";

import { propsCarrossel } from "../../interface";

export default function CarrosselDesktop({
  obj,
  id,
  corIndicador,
}: propsCarrossel) {
  const primeraParte = obj && Array.isArray(obj) ? obj.slice(0, 3) : [];
  const segundaParte = obj && Array.isArray(obj) ? obj.slice(3) : [];

  console.log(obj);

  return (
    <s.situacoesStyle>
      <Interface>
        <div id={id} className="carousel slide mt-5">
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
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <s.containerCarroousel>
                {primeraParte.map((item, index) => (
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
                ))}
              </s.containerCarroousel>
            </div>
            <div className="carousel-item">
              <s.containerCarroousel>
                {segundaParte.map((item, index) => (
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
                ))}
              </s.containerCarroousel>
            </div>
          </div>
          <button
            className="carousel-control-prev justify-content-start"
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
            className="carousel-control-next justify-content-end"
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
