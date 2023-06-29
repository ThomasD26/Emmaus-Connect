import styles from "./footer.module.scss";

function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <p className={styles.creators}>
          Développé par : Amaury Clot - Alex Dubrulle-Fagnoni
        </p>
      </div>
    </footer>
  );
}

export default Footer;
