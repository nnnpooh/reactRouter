import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import User from './components/User';
import ProtectedRoute from './components/ProtectedRoute';
import Nav from './components/Nav';
import userContext from './context/userContext';
import SignUp from './components/SignUp';
import { auth } from './firebase';

function App() {
  const [user, setUser] = useState('');

  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const { email } = user;
        //console.log({ email, displayName });
        setUser(email);
        history.push('/');
      } else {
        setUser('');
      }
    });
  }, [history]);

  return (
    <userContext.Provider value={{ user, setUser }}>
      <Nav />
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <ProtectedRoute path='/user' component={User} />
        <ProtectedRoute exact path='/' component={Home} />
      </Switch>
    </userContext.Provider>
  );
}

export default App;
