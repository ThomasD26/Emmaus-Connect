import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <main>
      <h1 className="banniere"> Make Desicion</h1>
      <div className="mainHome">
        <Link className="Creer" to="/CreatePage">
          <img
            className="styles.imgCards"
            src="./src/assets/makesensecréer.jpg"
            alt="Makesense.Logo"
          />
          <h2 className="TitreHome">Créer ta décision</h2>
          <p className="TexteHome">
            Soit force de proposition pour changer le monde!
          </p>
        </Link>
        <Link className="EnCours" to="/VotePage">
          <img
            className="imgCards"
            src="./src/assets/encoursdevote.jpeg"
            alt="Makesense.Logo"
          />
          <h2 className="TitreHome">En cours de vote</h2>
          <p className="TexteHome">
            Soit force de proposition pour changer le monde!
          </p>
        </Link>
        <Link className="VoteEnd" to="/ValidPage">
          <img
            className="imgCards"
            src="./src/assets/makesensevalide.jpg"
            alt="Makesense.Logo"
          />
          <h2 className="TitreHome">Votation terminé</h2>
          <p className="TexteHome">
            Soit force de proposition pour changer le monde!
          </p>
        </Link>
      </div>
    </main>
  );
}