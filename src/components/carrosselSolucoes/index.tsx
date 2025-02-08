import * as s from "../containers/situacoes/style";

// components
import Card from "../card";

// obj
import { objSolucoes } from "../../data";
import { Color } from "../../styles/variaveis";

export default function CarrosselSolucoes() {
  return (
    <div id="carouselExampleIndicators3" className="carousel slide">
      <div className="carousel-indicators" style={{ bottom: -70 }}>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators3"
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
          data-bs-target="#carouselExampleIndicators3"
          data-bs-slide-to="1"
          aria-label="Slide 2"
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
            {objSolucoes.map((item) => (
              <Card
                texto={item.texto}
                title={item.title}
                textButton={item.textButton}
                numeroCard={item.numeroCard}
                bgButton={item.bgButton}
                radiusButton={item.radiusButton}
                colorButton={item.colorButton}
              />
            ))}
          </s.containerCarroousel>
        </div>
        <div className="carousel-item">
          <s.containerCarroousel>
            {objSolucoes.map((item) => (
              <Card
                texto={item.texto}
                title={item.title}
                textButton={item.textButton}
                numeroCard={item.numeroCard}
                bgButton={item.bgButton}
                radiusButton={item.radiusButton}
                colorButton={item.colorButton}
              />
            ))}
          </s.containerCarroousel>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators3"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators3"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
