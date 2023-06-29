import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";

function Navbar() {
  return (
    <nav className={styles.navlinks}>
      <div className={styles.ul}>
        <Link className={styles.créer} to="/Phone">
          <li> Liste des téléphones</li>
        </Link>
        <Link className={styles.encours} to="/Menu/AjouterTel">
          <li> Rajoute un téléphone</li>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
