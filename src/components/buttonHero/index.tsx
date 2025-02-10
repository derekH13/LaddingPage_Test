import React from "react";
import * as s from "./style";

export interface PropsButton {
  color?: string;
  borderColor?: string;
  bgColor?: string;
  icon?: React.ReactNode;
  text?: string;
  width?: string;
  radiusButton?: number;
  classAnimation?: "heroBtn" | "solucoesBtn" | "cardBtn";
}

export default function ButtonHero({
  color,
  icon,
  text,
  bgColor,
  radiusButton,
  borderColor,
  width,
  classAnimation,
}: PropsButton) {
  return (
    <s.StyleButtonHero
      color={color}
      bgColor={bgColor}
      radiusButton={radiusButton}
      borderColor={borderColor}
      width={width}
      className={classAnimation}
    >
      {icon} {text}
    </s.StyleButtonHero>
  );
}
