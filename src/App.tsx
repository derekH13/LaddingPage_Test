import Home from "./components/pages/Home";
import GlobalStyle from "./styles/Global";

import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Home />
    </Provider>
  );
}

export default App;
