import React from "react";
import { ContainerInfo, Interface } from "../../../styles/Global";
import { Color } from "../../../styles/variaveis";

export default function Faturar() {
  return (
    <ContainerInfo bg={Color.verdePrimary}>
      <Interface>
        <div className="tab"></div>
      </Interface>
    </ContainerInfo>
  );
}
