import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Products from "./pages/Products";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
