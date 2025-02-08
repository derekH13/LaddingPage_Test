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
}

export default function ButtonHero({
  color,
  icon,
  text,
  bgColor,
  radiusButton,
  borderColor,
  width,
}: PropsButton) {
  return (
    <s.StyleButtonHero
      color={color}
      bgColor={bgColor}
      radiusButton={radiusButton}
      borderColor={borderColor}
      width={width}
    >
      {icon} {text}
    </s.StyleButtonHero>
  );
}
