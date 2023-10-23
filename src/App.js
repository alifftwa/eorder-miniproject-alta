import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Menu from "./pages/Menu";
import Ourchef from "./pages/Ourchef";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/ourchef" element={<Ourchef />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
