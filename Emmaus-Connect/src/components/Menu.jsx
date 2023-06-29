import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <main>
      <h1 className="banniere">Emmaüs-Connect</h1>
      <div className="mainHome">
        <Link className="Creer" to="/Menu/PrixTel">
          <h2 className="TitreHome">Créer ta décision</h2>
          <p className="TexteHome">
          </p>
        </Link>
        <Link className="EnCours" to="/Menu/Chatmembre">
          <h2 className="TitreHome">En cours de vote</h2>
          <p className="TexteHome">
          </p>
        </Link>
        <Link className="VoteEnd" to="/Menu/AjouterTel">
          <h2 className="TitreHome">Votation terminé</h2>
          <p className="TexteHome">
          </p>
        </Link>
      </div>
      <div className="footer"/>
    </main>
  );
}