import React, { useEffect, useState } from 'react';
import calculerValeurTelephone from './algo.js';
import { Link } from "react-router-dom";

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
    <Link className="banniere" to='/Menu'>Emmaüs-Connect</Link>
    <h1>Liste des téléphones</h1>
    <div className="mainHome">{phones.map((phone) => (
      <div key={phone.ID} className='phoneCard'>
    <h2> </h2>    <ul>
          <li className='Phonename'>
            Nom: {phone.Phonename}
          </li> 
          <li className='Phone-info'>  <ul className='tables'/>
            Marque: {phone.Marque}
          </li>
          <li className='Phone-info'>
            Système d'exploitation: {phone.Systemeexploitation}
          </li>
          <li className='Phone-info'>
            RAM: {phone.Ram}GB
          </li>
          <li className='Phone-info'>
            Stockage: {phone.Memoire}GB
          </li>
          <li className='Phone-info'>
            Réseau: {phone.Reseau}
          </li>
          <li className='Phone-info'>
            Écran: {phone.Ecran}
          </li>
          <li className='Phone-info'>
            État global: {phone.Etatglobal}
          </li>
          <li className='Phone-info'>
            État de l'écran: {phone.Etatecran}
          </li>
          <li className='Phone-info'>
            Capacité de la batterie: {phone.Capacitebatterie}
          </li>
          <li className='Phone-info'>
            Chargeur: {phone.Chargeur}
          </li>
          <li className='Phone-info2'>
            Valeur totale: {phone.valeurTotale}
          </li>
        </ul>
      </div>
    ))}
    </div>
    <div className="footer"/>
  </main>
);
}

export default PhoneApp;
