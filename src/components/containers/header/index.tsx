// styles
import * as s from "./style";
import { Interface } from "../../../styles/Global";

export default function Header() {
  return (
    <s.styleHeader>
      <Interface>
        <s.styledContente mostrar={false}>
          <a href="#">
            <img src="src/assets/images/logo.png" alt="" />
          </a>
          <div className="mobille">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="white"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </div>
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
