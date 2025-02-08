import Economizar from "./components/containers/economizar";
import Faturar from "./components/containers/faturar";
import Footer from "./components/containers/Footer";
import Header from "./components/containers/header";
import Hero from "./components/containers/hero";
import Razoes from "./components/containers/razoes";
import Situacoes from "./components/containers/situacoes";
import Solucoes from "./components/containers/solucoes";
import GlobalStyle from "./styles/Global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Situacoes />
      <Faturar />
      <Economizar />
      <Razoes />
      <Solucoes />
      <Footer />
    </>
  );
}

export default App;
