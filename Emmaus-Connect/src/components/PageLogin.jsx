import React from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <main className="mainHomes">
      <Link className="banniere" to='/Menu'>Emmaüs-Connect</Link>
      <div className="labelStyles">
        <div className="recalibrage"/>
        <label>
          <div className="Username">
            <input className="UsernameS"
              type="username"
              name="username"
              placeholder="Adresse@mail.fr"
            />
          </div>
        </label>
        <label>
          <div className="Password">
            <input className="PasswordS"
              type="password"
              name="password"
              placeholder="Mot de passe"
            />
          </div>
        </label>
        <div className="login">
          <button className="styles.button" type="submit">
            LOGIN
          </button>
          </div>
      </div>
    </main>
  );
}
export default LoginForm;