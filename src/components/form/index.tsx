// styles
import { Texto, Title } from "../../styles/Global";
import { Color } from "../../styles/variaveis";
import ButtonHero from "../buttonHero";

// components
import InputLadding from "../Input";
import InputCheckbox from "../inputCheckbox";
import TextArea from "../textArea";

import * as s from "./style";

export default function Form() {
  return (
    <s.StyleForm action="">
      <div className="form_logo">
        <img src="src/assets/images/logo.png" alt="" />
        Pesquisa Ativa
      </div>
      <Title
        color={Color.cinzaSecundary}
        colorSpan={Color.verdeSecundary}
        tamanho="middle"
        weight={400}
      >
        <span>Contate-nos</span>
      </Title>

      <InputLadding
        id="nome"
        text="nome"
        type="text"
        placeholder="Nome inteiro"
      />
      <InputLadding
        id="e-mail"
        text="e-mail"
        type="email"
        placeholder="e-mail"
      />
      <InputLadding
        id="telefone"
        text="telefone"
        type="tel"
        placeholder="telefone"
      />

      <TextArea
        placeholder="ex: (11/03...)"
        id="consultoria"
        text="Acrescente o dia que gostaria de marcar essa consultoria"
      />

      <div className="checkbox">
        <InputCheckbox />
        <Texto color={Color.black} colorSpan={Color.black}>
          Receber novidades
        </Texto>
      </div>

      <ButtonHero
        bgColor={Color.verdeSecundary}
        color={Color.BrancoFundo}
        text="Marcar Consulta"
        radiusButton={10}
      />
    </s.StyleForm>
  );
}
