import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import userContext from '../context/userContext';

function Login() {
  let history = useHistory();
  const handleLogin = () => {
    localStorage.setItem('isAuthenticated', true);
    setUser('New User');
    history.push('/');
  };

  const { setUser } = useContext(userContext);

  return (
    <div>
      <h1>login</h1>
      <button onClick={handleLogin}>Sign In</button>
    </div>
  );
}

export default Login;
