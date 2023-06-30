import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/PageLogin";
import Header from "./components/Header";
import Menu from "./components/Menu";
import PhoneApp from "./components/PhoneApp";
import AjouterTel from "./components/AjouterTel";
import Footer from "./components/Footer";
import "./App.css";
import styles from "./app.module.scss";

function App() {
  return (
    <Router>
      <div className={styles.appContainer}>
        <Header />
        <Routes>
          <Route path="/" element={<PhoneApp />} />
          <Route path="/Menu" element={<PhoneApp />} />
          <Route path="/Phone" element={<PhoneApp />} />
          <Route path="/Menu/AjouterTel" element={<AjouterTel/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;