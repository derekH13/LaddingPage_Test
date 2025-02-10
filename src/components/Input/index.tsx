import { Field } from "formik";
import * as s from "./style";

export type propsInput = {
  id: string;
  text: string;
  type?:
    | "button"
    | "email"
    | "checkbox"
    | "password"
    | "number"
    | "text"
    | "tel";
  placeholder: string;
  icon?: React.ReactNode;
};

function InputLadding({ id, text, type, icon }: propsInput) {
  return (
    <s.InputStyle>
      <label className="desktop" htmlFor={id}>
        {text}
      </label>

      <div className="container-input">
        <Field type={type} id={id} name={id} />
      </div>

      {icon}
    </s.InputStyle>
  );
}

export default InputLadding;
