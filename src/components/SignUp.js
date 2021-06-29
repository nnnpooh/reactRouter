import React, { useState, useContext } from 'react';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';
import userContext from '../context/userContext';

function SignIn() {
  let history = useHistory();
  function handleSubmit(e) {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userObj) => {
        const { user } = userObj;
        //console.log(userObj);
        setUser(user.email);
        history.push('/');
      })
      .catch(console.log);
  }

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

  const { setUser } = useContext(userContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [errorMessage, setErrorMessage] = useState('');
  return (
    <div>
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <label>
          email
          <input
            type='email'
            value={email}
            onChange={(e) => handleChange(e, 'email')}
            autoComplete='email'
          ></input>
        </label>
        <label>
          Password
          <input
            type='password'
            value={password}
            onChange={(e) => handleChange(e, 'password')}
            autoComplete='current-password'
          ></input>
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

export default SignIn;
