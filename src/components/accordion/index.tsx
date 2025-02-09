import { Color } from "../../styles/variaveis";
import * as s from "./styles";

import { motion } from "framer-motion";

type props = s.propsAccordion & {
  title: string;
  texto: React.ReactNode;
  clicado: (num: string) => void;
  number: string;
};

export default function Accordion({
  title,
  texto,
  isActive,
  clicado,
  number,
}: props) {
  return (
    <s.StyleAccordion onClick={() => clicado(number)} isActive={isActive}>
      <div className={`accordion_content title ${isActive ? "active" : ""}`}>
        {title}
        <button className={`item ${isActive ? "active" : ""}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            className="bi bi-chevron-down"
            viewBox="0 0 16 16"
            strokeWidth={1}
            stroke={Color.BrancoFundo}
          >
            <path
              fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
          </svg>
        </button>
      </div>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, maxHeight: 0 }}
          animate={{ opacity: 1, maxHeight: 500 }}
          transition={{ duration: 0.3 }}
          className="accordion_content informacao"
        >
          {texto}
        </motion.div>
      )}
    </s.StyleAccordion>
  );
}
