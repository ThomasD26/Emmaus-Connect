import React from "react";

function LoginForm() {
  return (
    <main className="mainHomes">
      <form className="labelStyles">
        <h1 className="bigTitle">make decision</h1>
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