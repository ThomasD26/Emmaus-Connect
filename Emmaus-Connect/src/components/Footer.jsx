import styles from "./footer.module.scss";

function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <p className={styles.creators}>
        Développé par : Amaury Clot - Thomas Denneulin - Dubrulle-Fagnoni - Laëtitia Girbau
        </p>
      </div>
    </footer>
  );
}

export default Footer;
