import React, { useState } from "react";
import styles from "./ajouterTel.module.scss";

const AjouterTel = () => {
  const [state, setState] = useState({
    Phonename: "",
    Systemeexploitation: "",
    Marque: "",
    Ram: "",
    Memoire: "",
    Reseau: "",
    Ecran: "",
    Etatglobal: "",
    Etatecran: "",
    Capacitebatterie: "",
    Chargeur: "",
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      Phonename: state.Phonename,
      Systemeexploitation: state.Systemeexploitation,
      Marque: state.Marque,
      Ram: state.Ram,
      Memoire: state.Memoire,
      Reseau: state.Reseau,
      Ecran: state.Ecran,
      Etatglobal: state.Etatglobal,
      Etatecran: state.Etatecran,
      Capacitebatterie: state.Capacitebatterie,
      Chargeur: state.Chargeur,
    };

    try {
      const response = await fetch("http://localhost:5000/api/phone", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Données enregistrées avec succès");
        // Réinitialiser les valeurs des champs
        setState({
          Phonename: "",
          Systemeexploitation: "",
          Marque: "",
          Ram: "",
          Memoire: "",
          Reseau: "",
          Ecran: "",
          Etatglobal: "",
          Etatecran: "",
          Capacitebatterie: "",
          Chargeur: "",
        });
      } else {
        throw new Error("Erreur lors de l'enregistrement des données");
      }
    } catch (error) {
      console.error(error);
    }
  };

    return (
      <main>
        <h1 className={styles.banniere}>
        Rajouter un téléphone
        </h1>
        <div onSubmit={handleSubmit}>
      <form>
        <div className={styles.labelContainer}>
        <label>
          Nom du téléphone:
          <input
            className={styles.case}
            type="text"
            name="Phonename"
            value={state.Phonename}
            onChange={handleChange}
          />
        </label>

        <label>
          Système d'exploitation:
          <input
            className={styles.case}
            type="text"
            name="Systemeexploitation"
            value={state.Systemeexploitation}
            onChange={handleChange}
          />
        </label>

        <label>
          Marque:
          <input
            className={styles.case}
            type="text"
            name="Marque"
            value={state.Marque}
            onChange={handleChange}
          />
        </label>

              <label>
          Ram :
          <select
            className={styles.case}
            name="Ram"
            value={state.Ram}
            onChange={handleChange}
          >
            <option value="">Sélectionnez une option</option>
            <option value="1">1GO</option>
            <option value="2">2GO</option>
            <option value="3">3GO</option>
            <option value="4">4GO</option>
            <option value="5">5GO</option>
            <option value="6">6GO</option>
            <option value="7">7GO</option>
            <option value="8">8GO</option>
          </select>
        </label>

              <label>
          Memoire :
          <select
            className={styles.case}
            name="Memoire"
            value={state.Memoire}
            onChange={handleChange}
          >
            <option value="">Sélectionnez une option</option>
            <option value="8">8GO</option>
            <option value="16">16GO</option>
            <option value="32">32GO</option>
            <option value="64">64GO</option>
            <option value="128">128GO</option>
            <option value="256">256GO</option>
            <option value="512">512GO</option>
          </select>
        </label>

        <label>
          Réseau:
          <input
            className={styles.case}
            type="text"
            name="Reseau"
            value={state.Reseau}
            onChange={handleChange}
          />
        </label>

        <label>
          Écran:
          <input
            className={styles.case}
            type="text"
            name="Ecran"
            value={state.Ecran}
            onChange={handleChange}
          />
        </label>

              <label>
          État global:
          <select
            className={styles.case}
            name="Etatglobal"
            value={state.Etatglobal}
            onChange={handleChange}
          >
            <option value="">Sélectionnez une option</option>
            <option value="mauvais">Mauvais</option>
            <option value="correct">Correct</option>
            <option value="bon">Bon</option>
            <option value="excellent">Excellent</option>
          </select>
        </label>

                      <label>
          État écran :
          <select
            className={styles.case}
            name="Etatecran"
            value={state.Etatecran}
            onChange={handleChange}
          >
            <option value="">Sélectionnez une option</option>
            <option value="rayé">rayé</option>
            <option value="correct">Correct</option>
            <option value="bon">Bon</option>
            <option value="excellent">Excellent</option>
          </select>
        </label>

                   <label>
          Capacité batterie :
          <select
            className={styles.case}
            name="Capacitebatterie"
            value={state.Capacitebatterie}
            onChange={handleChange}
          >
            <option value="">Sélectionnez une option</option>
            <option value="mauvais">Mauvais</option>
            <option value="correct">Correct</option>
            <option value="bon">Bon</option>
            <option value="excellent">Excellent</option>
          </select>
        </label>

              <label>
          Chargeur :
          <select
            className={styles.case}
            name="Chargeur"
            value={state.Chargeur}
            onChange={handleChange}
          >
            <option value="">Sélectionnez une option</option>
            <option value="oui">oui</option>
            <option value="non">non</option>
          </select>
        </label>  
        </div>      
      </form>
      <div className={styles.buttonContainer}>
        <button
          className={styles.recButton}
          type="submit" >
          Enregistrer
        </button>
      </div>
      </div>
      </main>
    );
}

export default AjouterTel;
