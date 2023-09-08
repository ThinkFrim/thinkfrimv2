import ScreenLoading from "./components/loadingscreen/ScreenLoading";
import Home from "./page/Home";
import './App.css'
import { BrowserRouter } from "react-router-dom";
import { Footer, Nav } from "./components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Home />
          {/* <Footer /> */}
        <ScreenLoading />
      </BrowserRouter>
    </div>
  );
}

export default App;
