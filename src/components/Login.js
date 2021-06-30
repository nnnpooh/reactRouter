import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    //localStorage.setItem('isAuthenticated', true);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        //const { user } = userCredential;
        console.log('Login Successfully');
      })
      .catch(console.log);
  };

  function handleChange(e, type) {
    switch (type) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        console.error('error');
    }
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <h1>login</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type='email'
            value={email}
            onChange={(e) => handleChange(e, 'email')}
          />
        </label>
        <label>
          Password
          <input
            type='password'
            value={password}
            onChange={(e) => handleChange(e, 'password')}
          />
        </label>
        <input type='submit' />
      </form>

      <p>
        or <Link to='/signup'>Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;
