import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fruit from "./components/fruits";
import Form from "./components/form";
import Data from "./components/data";
import HomePage from "./components/homepage";
import "./App.css";
import Welcome from "./components/welcome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fruit" element={<Fruit />} />
        <Route path="/form" element={<Form />} />
        <Route path="/data" element={<Data />} />
        <Route path="/welcome" element={<Welcome name="Krishna" />} />
      </Routes>
    </Router>
  );
}

export default App;
