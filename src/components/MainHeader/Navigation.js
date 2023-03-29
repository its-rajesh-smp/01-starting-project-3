import React, { useContext } from 'react';
import classes from './Navigation.module.css';
import IsLoggedIn_Context from '../../Context/LogIn/isLoggedIn-Context';


const Navigation = () => {


  const context=useContext(IsLoggedIn_Context)

  return (
    <>
    <nav className={classes.nav}>
          <ul>
            {context.isLoggedIn && (
              <li>
                <a href="/">Users</a>
              </li>
            )}
            {context.isLoggedIn && (
              <li>
                <a href="/">Admin</a>
              </li>
            )}
            {context.isLoggedIn && (
              <li>
                <button onClick={context.logoutHandler}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
    </>
  );
};

export default Navigation;
