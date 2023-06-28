import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/PageLogin";
import Menu from "./components/Menu";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/Menu" element={<Menu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;