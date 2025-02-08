import * as s from "./style";

type props = {
  id: string;
  text: string;
  type:
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

function InputLadding({ id, text, type, placeholder, icon }: props) {
  return (
    <s.inputStyle>
      <label className="desktop" htmlFor={id}>
        {text}
      </label>

      <div className="container-input">
        <input required type={type} id={id} placeholder={placeholder} />
      </div>

      {icon}
    </s.inputStyle>
  );
}

export default InputLadding;
