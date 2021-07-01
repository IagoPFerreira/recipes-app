import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

function LoginPage() {
  const contextUser = useContext(UserContext);
  const { userEmail, setUserEmail, userPassw, setUserPassw } = contextUser;
  const [validEmail, setValidEmail] = useState(false);
  const [validPassw, setValidPassw] = useState(false);
  const [btnLogin, setBtnLogin] = useState(true);

  useEffect(() => {
    if (validEmail && validPassw) {
      setBtnLogin(false);
    } else { setBtnLogin(true); }
  }, [validEmail, validPassw]);

  function handleChanges(event, setState, setValid) {
    const { value } = event.target;
    setState(value);
    const validated = event.target.checkValidity();
    if (validated === true) {
      setValid(true);
    }
  }

  function setLocalStorage() {
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    const setUser = { email: userEmail };
    const emailStringFly = JSON.stringify(setUser);
    localStorage.setItem('user', emailStringFly);
  }

  return (
    <div>
      <label htmlFor="email-input">
        E-mail
        <input
          data-testid="email-input"
          id="email-input"
          type="email"
          name="email"
          value={ userEmail }
          onChange={ (event) => handleChanges(event, setUserEmail, setValidEmail) }
          pattern="(\w\.?)+@[\w\.-]+\.\w{2}"
          required
        />
      </label>

      <label htmlFor="password-input">
        Senha
        <input
          data-testid="password-input"
          id="password-input"
          type="password"
          name="password"
          value={ userPassw }
          onChange={ (event) => handleChanges(event, setUserPassw, setValidPassw) }
          pattern=".{7,}"
        />
      </label>
      <Link to="/comidas">
        <button
          data-testid="login-submit-btn"
          type="submit"
          disabled={ btnLogin }
          onClick={ setLocalStorage }
        >
          Entrar
        </button>
      </Link>
    </div>
  );
}

export default LoginPage;