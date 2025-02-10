import { InputStyle } from "../Input/style";
import { propsInput } from "../Input";
import { Field } from "formik";

export default function TextArea({ id, text, placeholder }: propsInput) {
  return (
    <InputStyle>
      <label className="desktop" htmlFor={id}>
        {text}
      </label>
      <div className="container-input textarea">
        <Field
          className="textarea"
          name={id}
          id={id}
          placeholder={placeholder}
        ></Field>
      </div>
    </InputStyle>
  );
}
