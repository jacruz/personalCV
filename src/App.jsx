import MenuTopBar from "./components/base/MenuTopBar";
import Home from "./components/home/Home";
import {GlobalProvider} from "./contexts/GlobalContext";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <MenuTopBar></MenuTopBar>
        <p>
            Hi! <code>hello world!</code>.
        </p>
        <Home></Home>
      </GlobalProvider>
    </div>
  );
}

export default App;
