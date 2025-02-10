import * as s from "./style";

type props = {
  isActive: boolean;
  clickMenu: () => void;
};

export default function NavModal({ isActive, clickMenu }: props) {
  return (
    <s.StyleNavModal className={`${isActive ? "active" : ""}`}>
      <nav>
        <ul>
          <li onClick={() => clickMenu()}>
            <a href="#hero">Sobre</a>
          </li>

          <li onClick={() => clickMenu()}>
            <a href="#faturar">Benefícios</a>
          </li>

          <li onClick={() => clickMenu()}>
            <a href="#solucoes">Soluções</a>
          </li>

          <li onClick={() => clickMenu()}>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
    </s.StyleNavModal>
  );
}
