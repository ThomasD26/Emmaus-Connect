import React, { useEffect, useState } from 'react';
import calculerValeurTelephone from './algo.js';

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
  <div>
    <h1>Liste des téléphones</h1>{phones.map((phone) => (
      <div key={phone.ID}>
        
    <h2> s</h2>    <ul>
          <li>
            Nom: {phone.Phonename}
          </li>
          <li>
            Marque: {phone.Marque}
          </li>
          <li>
            Système d'exploitation: {phone.Systemeexploitation}
          </li>
          <li>
            RAM: {phone.Ram}GB
          </li>
          <li>
            Stockage: {phone.Memoire}GB
          </li>
          <li>
            Réseau: {phone.Reseau}
          </li>
          <li>
            Écran: {phone.Ecran}
          </li>
          <li>
            État global: {phone.Etatglobal}
          </li>
          <li>
            État de l'écran: {phone.Etatecran}
          </li>
          <li>
            Capacité de la batterie: {phone.Capacitebatterie}
          </li>
          <li>
            Chargeur: {phone.Chargeur}
          </li>
          <li>
            Valeur totale: {phone.valeurTotale}
          </li>
        </ul>
      </div>
    ))}
  </div>
);
}

export default PhoneApp;
