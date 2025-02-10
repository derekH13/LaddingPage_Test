import { Form as Formulario, ErrorMessage } from "formik";
import * as Yup from "yup";

// styles
import { Texto, Title } from "../../styles/Global";
import { Color } from "../../styles/variaveis";
import ButtonHero from "../buttonHero";

// components
import InputLadding from "../Input";
import InputCheckbox from "../inputCheckbox";
import TextArea from "../textArea";

import * as s from "./style";

// validação
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Campo obrigatório"),
  email: Yup.string()
    .email("Digite um email válido")
    .required("Campo obrigatório"),
  telefone: Yup.string().required("Campo Obrigatório"),
  consultoria: Yup.string().required("Campo obrigatório"),
});

export default function Form() {
  return (
    <s.StyleForm
      initialValues={{ name: "", email: "", telefone: "", consultoria: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <s.StyleContainer>
          <div className="form_logo">
            <img
              src="https://i.im.ge/2025/02/10/H01R56.logo.png"
              alt="Imagem de uma bússola com a agulha apontando para o norte, destacando a cor azul no centro do logo."
            />
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

          <Formulario>
            <InputLadding
              id="name"
              text="nome"
              type="text"
              placeholder="Nome inteiro"
            />
            <ErrorMessage
              className="msgError"
              name="name"
              render={(msg) => (
                <div
                  style={{
                    color: "red",
                    fontSize: 14,
                    position: "absolute",
                    right: 0,
                  }}
                >
                  {msg}
                </div>
              )}
            />

            <InputLadding
              text="email"
              id="email"
              type="email"
              placeholder="E-mail"
            />
            <ErrorMessage
              className="msgError"
              name="email"
              render={(msg) => (
                <div
                  style={{
                    color: "red",
                    fontSize: 14,
                    position: "absolute",
                    right: 0,
                  }}
                >
                  {msg}
                </div>
              )}
            />

            <InputLadding
              id="telefone"
              type="tel"
              placeholder="Telefone"
              text="telefone"
            />

            <ErrorMessage
              className="msgError"
              name="telefone"
              render={(msg) => (
                <div
                  style={{
                    color: "red",
                    fontSize: 14,
                    position: "absolute",
                    right: 0,
                  }}
                >
                  {msg}
                </div>
              )}
            />

            <TextArea
              id="consultoria"
              placeholder="Ex: (11/03...)"
              text="acrescente a data da consultoria...."
            />

            <ErrorMessage
              className="msgError"
              name="consultoria"
              render={(msg) => (
                <div
                  style={{
                    color: "red",
                    fontSize: 14,
                    position: "absolute",
                    right: 0,
                  }}
                >
                  {msg}
                </div>
              )}
            />

            <div className="checkbox">
              <InputCheckbox />
              <Texto color={Color.black} colorSpan={Color.black}>
                Receber novidades
              </Texto>
            </div>

            <ButtonHero
              classAnimation="cardBtn"
              bgColor={Color.verdeSecundary}
              color={Color.BrancoFundo}
              text="Marcar Consulta"
              radiusButton={10}
            />
          </Formulario>
        </s.StyleContainer>
      )}
    </s.StyleForm>
  );
}
