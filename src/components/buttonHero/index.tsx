import React from "react";
import * as s from "./style";

export interface PropsButton {
  color?: string;
  icon?: React.ReactNode;
  text?: string;
}

export default function ButtonHero({ color, icon, text }: PropsButton) {
  return (
    <s.StyleButtonHero color={color}>
      {icon} {text}
    </s.StyleButtonHero>
  );
}
