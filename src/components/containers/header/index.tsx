// styles
import * as s from "./style";
import { Interface } from "../../../styles/Global";
import { useSelector } from "react-redux";
import { RootReducer } from "../../../redux/store";

import { motion } from "framer-motion";
import NavModal from "../NavModal";
import { useState } from "react";

export default function Header() {
  const visible = useSelector((state: RootReducer) => state.mostarNav.itens);

  const [isModal, setIsModal] = useState(false);

  const toogleModal = () => {
    setIsModal(!isModal);
  };
  return (
    <>
      <NavModal isActive={isModal} clickMenu={toogleModal} />
      <s.styleHeader>
        {visible && (
          <motion.img
            initial={{ opacity: 0, y: -150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            src="src/assets/images/HeroImage.png"
            alt="Imagem de uma bússola com a agulha apontando para o norte, destacando a cor azul no centro do logo. A bússola representa a orientação e o direcionamento, com a cor azul enfatizando o compromisso da empresa em guiar seus clientes com confiança e precisão. O design sugere que a empresa tem o foco em ajudar a direcionar para o caminho certo."
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
            <button onClick={() => setIsModal(!isModal)} className="mobille">
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
            </button>
            <ul>
              <li>
                <a href="#hero">Sobre</a>
              </li>
              |
              <li>
                <a href="#faturar">Benefícios</a>
              </li>
              |
              <li>
                <a href="#solucoes">Soluções</a>
              </li>
              |
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </s.styledContent>
        </Interface>
      </s.styleHeader>
    </>
  );
}
