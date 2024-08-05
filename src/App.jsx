import { BrowserRouter } from "react-router-dom";
import MainRouter from "./pages/router/MainRouter";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
