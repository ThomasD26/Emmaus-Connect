import { Link } from "react-router-dom";
import React from "react";

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      Phonename: this.state.Phonename,
      Systemeexploitation: this.state.Systemeexploitation,
      Marque: this.state.Marque,
      Ram: this.state.Ram,
      Memoire: this.state.Memoire,
      Reseau: this.state.Reseau,
      Ecran: this.state.Ecran,
      Etatglobal: this.state.Etatglobal,
      Etatecran: this.state.Etatecran,
      Capacitebatterie: this.state.Capacitebatterie,
      Chargeur: this.state.Chargeur,
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
      } else {
        throw new Error("Erreur lors de l'enregistrement des données");
      }
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <main>
      <Link className="banniere" to='/Menu'>Emmaüs-Connect</Link>
      <div className="mainHome">
      <form onSubmit={this.handleSubmit}>
        <label>
          Nom du téléphone:
          <input
            type="text"
            name="Phonename"
            value={this.state.Phonename}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Système d'exploitation:
          <input
            type="text"
            name="Systemeexploitation"
            value={this.state.Systemeexploitation}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Marque:
          <input
            type="text"
            name="Marque"
            value={this.state.Marque}
            onChange={this.handleChange}
          />
        </label>

              <label>
          Ram :
          <select
            name="Ram"
            value={this.state.Ram}
            onChange={this.handleChange}
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
            name="Memoire"
            value={this.state.Memoire}
            onChange={this.handleChange}
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
            type="text"
            name="Reseau"
            value={this.state.Reseau}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Écran:
          <input
            type="text"
            name="Ecran"
            value={this.state.Ecran}
            onChange={this.handleChange}
          />
        </label>

              <label>
          État global:
          <select
            name="Etatglobal"
            value={this.state.Etatglobal}
            onChange={this.handleChange}
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
            name="Etatecran"
            value={this.state.Etatecran}
            onChange={this.handleChange}
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
            name="Capacitebatterie"
            value={this.state.Capacitebatterie}
            onChange={this.handleChange}
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
            name="Chargeur"
            value={this.state.Chargeur}
            onChange={this.handleChange}
          >
            <option value="">Sélectionnez une option</option>
            <option value="oui">oui</option>
            <option value="non">non</option>
          </select>
        </label>

        <button type="submit">Enregistrer</button>
      </form>
      </div>
      <div className="footer"/>
      </main>
    );
  }
}

export default FormComponent;
