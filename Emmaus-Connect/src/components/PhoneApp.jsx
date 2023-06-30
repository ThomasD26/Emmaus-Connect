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
      <div key={phone.ID} className={styles.phoneCard}>
          <ul className={styles.Phonename}>
            {phone.Phonename}
          </ul> 
          <ul className={styles.PhoneInfo}> 
            <li className={styles.phoneInfoItem}>Marque:</li> 
            <li className={styles.PhoneValue}>{phone.Marque}</li>
          </ul>
          <ul className={styles.PhoneInfo}>
            <li className={styles.phoneInfoItem}>Système d'exploitation:</li> 
            <li className={styles.PhoneValue}>{phone.Systemeexploitation}</li>
          </ul>
          <ul className={styles.PhoneInfo}>
            <li className={styles.phoneInfoItem}>RAM: </li>
            <li className={styles.PhoneValue}>{phone.Ram}GB</li>
          </ul>
          <ul className={styles.PhoneInfo}>
            <li className={styles.phoneInfoItem}>Stockage:</li>
            <li className={styles.PhoneValue}>{phone.Memoire}GB</li>
          </ul>
          <ul className={styles.PhoneInfo}>
            <li className={styles.phoneInfoItem}>Réseau:</li> 
            <li className={styles.PhoneValue}>{phone.Reseau}</li>
          </ul>
          <ul className={styles.PhoneInfo}>
            <li className={styles.phoneInfoItem}>Écran: </li>
            <li className={styles.PhoneValue}>{phone.Ecran}</li>
          </ul>
          <ul className={styles.PhoneInfo}>
            <li className={styles.phoneInfoItem}>État global:</li>
            <li className={styles.PhoneValue}>{phone.Etatglobal}</li>
          </ul>
          <ul className={styles.PhoneInfo}>
            <li className={styles.phoneInfoItem}>État de l'écran:</li>
            <li className={styles.PhoneValue}>{phone.Etatecran}</li>
          </ul>
          <ul className={styles.PhoneInfo}>
            <li className={styles.phoneInfoItem}>Capacité de la batterie:</li>
            <li className={styles.PhoneValue}>{phone.Capacitebatterie}</li>
          </ul>
          <ul className={styles.PhoneInfo}>
            <li className={styles.phoneInfoItem}>Chargeur:</li>
            <li className={styles.PhoneValue}>{phone.Chargeur}</li>
          </ul>
          <ul className={styles.PhoneInfo}>
            <li className={styles.phoneInfoItem}>Valeur totale:</li>
            <li className={styles.PhoneValue}>{phone.valeurTotale}</li>
          </ul>
        </div>
    ))}
    </div>
  </main>
);
}

export default PhoneApp;
