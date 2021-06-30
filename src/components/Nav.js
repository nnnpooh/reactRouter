import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import userContext from '../context/userContext';
import { auth } from '../firebase';
function Nav() {
  let history = useHistory();
  const handleLogOut = () => {
    auth
      .signOut()
      .then(() => {
        localStorage.clear();
        setUser('');
        history.push('/login');
        // Sign-out successful.
      })
      .catch((error) => {
        console.error(error);
        // An error happened.
      });
  };

  let { user, setUser } = useContext(userContext);
  console.log({ user });

  const logOutButton = user ? (
    <li>
      <button onClick={handleLogOut}>Logout</button>
    </li>
  ) : (
    <></>
  );

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
          {logOutButton}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
