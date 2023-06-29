import React, { useEffect, useState } from 'react';
import calculerValeurTelephone from './algo.js';
import styles from "./phoneApp.module.scss";

function PhoneApp() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetchPhones();
  }, []);

  const fetchPhones = () => {
    fetch('http://localhost:5000/api/phone')
      .then((response) => response.json())
      .then((data) => {
        const phonesWithValues = data.map((phone) => {
          const valeurTelephone = calculerValeurTelephone(
            phone.Ram,
            phone.Memoire,
            phone.Etatglobal,
            phone.Etatecran,
            phone.Capacitebatterie,
            phone.Chargeur
          );
          return {
            ...phone,
            valeurTotale: valeurTelephone
          };
        });
        setPhones(phonesWithValues);
      })
      .catch((error) => console.log(error));
  };

return (
  <main>
    <h1 className={styles.banniere}>
        Liste des téléphone
    </h1>
    <div className={styles.mainHome}>{phones.map((phone) => (
      <ul key={phone.ID} className={styles.phoneCard}>
          <li className={styles.Phonename}>
            {phone.Phonename}
          </li> 
          <li className={styles.PhoneInfo}>  <ul className={styles.tables}/>
            Marque: {phone.Marque}
          </li>
          <li className={styles.PhoneInfo}>
            Système d'exploitation: {phone.Systemeexploitation}
          </li>
          <li className={styles.PhoneInfo}>
            RAM: {phone.Ram}GB
          </li>
          <li className={styles.PhoneInfo}>
            Stockage: {phone.Memoire}GB
          </li>
          <li className={styles.PhoneInfo}>
            Réseau: {phone.Reseau}
          </li>
          <li className={styles.PhoneInfo}>
            Écran: {phone.Ecran}
          </li>
          <li className={styles.PhoneInfo}>
            État global: {phone.Etatglobal}
          </li>
          <li className={styles.PhoneInfo}>
            État de l'écran: {phone.Etatecran}
          </li>
          <li className={styles.PhoneInfo}>
            Capacité de la batterie: {phone.Capacitebatterie}
          </li>
          <li className={styles.PhoneInfo}>
            Chargeur: {phone.Chargeur}
          </li>
          <li className={styles.PhoneInfo}>
            Valeur totale: {phone.valeurTotale}
          </li>
        </ul>
    ))}
    </div>
  </main>
);
}

export default PhoneApp;
