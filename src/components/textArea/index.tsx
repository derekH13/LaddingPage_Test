import { InputStyle } from "../Input/style";
import { propsInput } from "../Input";

export default function TextArea({ id, text, placeholder }: propsInput) {
  return (
    <InputStyle>
      <label className="desktop" htmlFor={id}>
        {text}
      </label>
      <div className="container-input">
        <textarea name="" id={id} placeholder={placeholder}></textarea>
      </div>
    </InputStyle>
  );
}
