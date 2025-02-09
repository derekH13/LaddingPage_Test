// styles
import * as s from "./style";
import { Interface } from "../../../styles/Global";
import { useSelector } from "react-redux";
import { RootReducer } from "../../../redux/store";

import { motion } from "framer-motion";

export default function Header() {
  const visible = useSelector((state: RootReducer) => state.mostarNav.itens);

  return (
    <s.styleHeader>
      {visible && (
        <motion.img
          initial={{ opacity: 0, y: -150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src="src/assets/images/HeroImage.png"
          alt=""
        />
      )}
      <Interface>
        <s.styledContent mostrar={visible}>
          <a href="#">
            {visible && (
              <motion.img
                initial={{ opacity: 0, scale: 0, y: -10, rotate: 100 }}
                animate={{ opacity: 1, scale: 1, y: -10, rotate: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                src="src/assets/images/logo.png"
                alt=""
              />
            )}
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
        </s.styledContent>
      </Interface>
    </s.styleHeader>
  );
}
