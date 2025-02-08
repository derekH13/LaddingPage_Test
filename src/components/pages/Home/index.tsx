// comonents
import { useState } from "react";
import GlobalStyle from "../../../styles/Global";
import Contato from "../../containers/contato";
import Economizar from "../../containers/economizar";
import Faturar from "../../containers/faturar";
import Footer from "../../containers/Footer";
import Header from "../../containers/header";
import Hero from "../../containers/hero";
import Razoes from "../../containers/razoes";
import Situacoes from "../../containers/situacoes";
import Solucoes from "../../containers/solucoes";

export default function Home() {
  const [mostarNav, setMostarNav] = useState(false);

  const toggleNav = () => {
    setMostarNav(!mostarNav);
  };

  console.log(toggleNav);

  return (
    <section>
      <GlobalStyle />
      <Header visibleBg={mostarNav} />
      <Hero />
      <Situacoes />
      <Faturar />
      <Economizar />
      <Razoes />
      <Solucoes />
      <Contato />
      <Footer />
    </section>
  );
}
