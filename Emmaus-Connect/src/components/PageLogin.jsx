import React from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <main className="mainHomes">
      <Link className="banniere" to='/Menu'> Make Desicion</Link>
      <form className="labelStyles">
        <label>
          <div className="Username">
            <input
              className="inputUsername"
              type="username"
              name="username"
              placeholder="Adresse@mail.fr"
            />
          </div>
        </label>
        <label>
          <div className="styles.Password">
            <input
              className="styles.inputPassword"
              type="password"
              name="password"
              placeholder="Mot de passe"
            />
          </div>
        </label>
        <div className="styles.login">
          <button className="styles.button" type="submit">
            LOGIN
          </button>
        </div>
      </form>
      <div>
        <img src="./src/assets/makesenseaccueil.jpg" alt="connect" />
      </div>
    </main>
  );
}
export default LoginForm;