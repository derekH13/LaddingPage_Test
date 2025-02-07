// styles
import * as s from "./style";
import { Interface } from "../../../styles/Global";

import {} from "../../../assets/images/logo.png";

export default function Header() {
  return (
    <s.styleHeader>
      <Interface>
        <s.styledContente>
          <a href="#">
            <img src="src/assets/images/logo.png" alt="" />
          </a>

          <ul>
            <li>
              <a href="#">Sobre</a>
            </li>
            |
            <li>
              <a href="#">Benefícios</a>
            </li>
            |
            <li>
              <a href="#">Soluções</a>
            </li>
            |
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </s.styledContente>
      </Interface>
    </s.styleHeader>
  );
}
