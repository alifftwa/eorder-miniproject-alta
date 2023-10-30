import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Menu from "./pages/Menu";
import Ourchef from "./pages/Ourchef";
import NotFound from "./pages/NotFound/NotFound";
import CartPages from "./pages/CartPages";
import Success from "./pages/Success";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/ourchef" element={<Ourchef />} />
            <Route path="/cart" element={<CartPages />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/success" Component={Success} exact />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
