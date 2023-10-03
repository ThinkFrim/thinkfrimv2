import ScreenLoading from "./components/loadingscreen/ScreenLoading";
import Home from "./page/Home";
import './App.css'
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Home />
        <ScreenLoading />
      </BrowserRouter>
    </div>
  );
}

export default App;
