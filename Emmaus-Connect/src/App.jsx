import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/PageLogin";
import Menu from "./components/Menu";
import PhoneApp from "./components/PhoneApp";
import Chatmembre from "./components/Chatmembre";
import AjouterTel from "./components/AjouterTel";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Phone" element={<PhoneApp />} />
          <Route path="/Menu/Chatmembre" element={<Chatmembre/>} />
          <Route path="/Menu/AjouterTel" element={<AjouterTel/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;