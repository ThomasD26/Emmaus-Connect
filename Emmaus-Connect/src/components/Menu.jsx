import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <main>
      <h1 className="banniere">Emmaüs-Connect</h1>
      <div className="mainHome">
        <Link className="Creer" to="/Menu/phone">
          <h2 className="TitreHome">Consulter la liste des téléphones disponible</h2>
          <p className="TexteHome">
          </p>
        </Link>
        <Link className="EnCours" to="/Menu/Chatmembre">
          <h2 className="TitreHome">messagerie instantanée</h2>
          <p className="TexteHome">
          </p>
        </Link>
        <Link className="VoteEnd" to="/Menu/AjouterTel">
          <h2 className="TitreHome">Rajoute un téléphone a la liste</h2>
          <p className="TexteHome">
          </p>
        </Link>
      </div>
      <div className="footer"/>
    </main>
  );
}