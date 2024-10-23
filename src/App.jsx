import MenuTopBar from "./components/base/MenuTopBar";
import Home from "./components/home/Home";
import {GlobalProvider} from "./contexts/GlobalContext";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
});

function App() {
  return (
    <div className="App">
      <I18nextProvider i18n={i18next}>
        <GlobalProvider>
          <MenuTopBar></MenuTopBar>
          <p>
              Hi! <code>hello world!</code>.
          </p>
          <Home></Home>
        </GlobalProvider>
      </I18nextProvider>
    </div>
  );
}

export default App;
