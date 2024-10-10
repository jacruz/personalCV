import MenuTopBar from "./components/base/MenuTopBar";
import Home from "./components/home/Home";
import GlobalContext from "./contexts/GlobalContext";

function App() {
  return (
    <div className="App">
      <GlobalContext>
        <MenuTopBar></MenuTopBar>
        <p>
            Hi! <code>hello world!</code>.
        </p>
        <Home></Home>
      </GlobalContext>
    </div>
  );
}

export default App;
