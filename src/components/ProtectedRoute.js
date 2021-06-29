import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import userContext from '../context/userContext';

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const { user } = useContext(userContext);
  //const isAuthenticated = localStorage.getItem('isAuthenticated');
  //console.log("this", isAuthenticated);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to='login' />
      }
    ></Route>
  );
}

export default ProtectedRoute;
