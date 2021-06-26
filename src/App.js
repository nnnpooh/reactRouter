import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import User from "./components/User";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  let history = useHistory();

  const handleLogOut = () => {
    localStorage.clear();
    console.log({ history });
    history.push("/");
  };
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
          <li>
            <a href="#" onClick={handleLogOut}>
              Logout
            </a>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/user" component={User} />
        <ProtectedRoute exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
