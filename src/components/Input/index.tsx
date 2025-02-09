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

function InputLadding({ id, text, type, placeholder, icon }: propsInput) {
  return (
    <s.InputStyle>
      <label className="desktop" htmlFor={id}>
        {text}
      </label>

      <div className="container-input">
        <input required type={type} id={id} placeholder={placeholder} />
      </div>

      {icon}
    </s.InputStyle>
  );
}

export default InputLadding;
