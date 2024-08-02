import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fruit from "./components/fruits";
import Form from "./components/form";
import Data from "./components/data";
import HomePage from "./components/homepage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fruit" element={<Fruit />} />
        <Route path="/form" element={<Form />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </Router>
  );
}

export default App;
