import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import User from './components/User';
import ProtectedRoute from './components/ProtectedRoute';
import Nav from './components/Nav';
import userContext from './context/userContext';
import SignUp from './components/SignUp';

function App() {
  const [user, setUser] = useState('');

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
