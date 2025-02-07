import CarrosselDesktop from "../../carrosselDesktop";
import CarosselMobille from "../../carrosselMobille";

import * as s from "./style";

export default function Situacoes() {
  return (
    <s.StyleMedia>
      <div className="desktop">
        <CarrosselDesktop />
      </div>
      <div className="mobille">
        <CarosselMobille />
      </div>
    </s.StyleMedia>
  );
}
