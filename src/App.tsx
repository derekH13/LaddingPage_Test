import Economizar from "./components/containers/economizar";
import Faturar from "./components/containers/faturar";
import Header from "./components/containers/header";
import Hero from "./components/containers/hero";
import Situacoes from "./components/containers/situacoes";
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
    </>
  );
}

export default App;
