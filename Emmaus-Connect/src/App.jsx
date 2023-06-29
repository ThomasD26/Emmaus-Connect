import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/PageLogin";
import Menu from "./components/Menu";
import PhoneApp from "./components/PhoneApp";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Phone" element={<PhoneApp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;