import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import EditPage from "./components/EditPage/EditPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <EditPage />
    </div>
  );
}

export default App;
