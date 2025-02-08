// styles
import { Texto, Title } from "../../styles/Global";
import { Color } from "../../styles/variaveis";

// components
import InputLadding from "../Input";
import InputCheckbox from "../inputCheckbox";

import * as s from "./style";

export default function Form() {
  return (
    <s.StyleForm action="">
      <div className="form_logo">
        <img src="src/assets/images/logo.png" alt="" />
        Pesquisa Ativa
      </div>
      <Title color={Color.black} colorSpan={Color.black}>
        Contate-nos
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
        placeholder="E-mail"
      />
      <InputLadding
        id="telefone"
        text="telefone"
        type="tel"
        placeholder="Telefone"
      />

      <div className="checkbox">
        <InputCheckbox />
        <Texto color={Color.black} colorSpan={Color.black}>
          Receber novidades
        </Texto>
      </div>
    </s.StyleForm>
  );
}
