import React from 'react';
import { Switch, Route, Link, useHistory } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import User from './components/User';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  let history = useHistory();
  const handleLogOut = () => {
    localStorage.clear();
    history.push('/login');
  };
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/user'>User</Link>
          </li>
          <li>
            <button onClick={handleLogOut}>Logout</button>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path='/login' component={Login} />
        <ProtectedRoute path='/user' component={User} />
        <ProtectedRoute exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
