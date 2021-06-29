import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import userContext from '../context/userContext';
function Nav() {
  let history = useHistory();
  const handleLogOut = () => {
    localStorage.clear();
    setUser('');
    history.push('/login');
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
