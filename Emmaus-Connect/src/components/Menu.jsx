import { Link } from "react-router-dom";
import styles from "./menu.module.scss";

export default function Menu() {
  return (
    <main>
      <h1 className={styles.banniere}> De la rue a la Vie</h1>
      <div className={styles.mainHome}>
        <Link className={styles.Creer} to="/Phone">
          <h2 className={styles.TitreHome}>Consulter la liste des téléphones disponible</h2>
        </Link>
        <Link className={styles.EnCours} to="/Menu/AjouterTel">
          <h2 className={styles.TitreHome}>Rajoute un téléphone a la liste</h2>
        </Link>
      </div>
    </main>
  );
}
