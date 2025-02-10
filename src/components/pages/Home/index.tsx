// comonents
import GlobalStyle from "../../../styles/Global";
import Contato from "../../containers/contato";
import Economizar from "../../containers/economizar";
import Faturar from "../../containers/faturar";
import Footer from "../../containers/Footer";
import Header from "../../containers/header";
import Hero from "../../containers/hero";
import Razoes from "../../containers/razoes";
import SegurançaDados from "../../containers/segurançaDados";
import Situacoes from "../../containers/situacoes";
import Solucoes from "../../containers/solucoes";

export default function Home() {
  return (
    <section>
      <GlobalStyle />
      <Header />
      <Hero />
      <Situacoes />
      <Faturar />
      <Economizar />
      <Razoes />
      <Solucoes />
      <SegurançaDados />
      <Contato />
      <Footer />
    </section>
  );
}
