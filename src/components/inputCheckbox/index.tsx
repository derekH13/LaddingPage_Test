import { SwitchStyle } from "./style";

export default function InputCheckbox() {
  return (
    <SwitchStyle>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
    </SwitchStyle>
  );
}
