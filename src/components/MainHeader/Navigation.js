import React from 'react';
import classes from './Navigation.module.css';
import IsLoggedInContext from '../../Context/LogIn/isLoggedIn-Context';


const Navigation = (props) => {
  return (
    <IsLoggedInContext.Consumer>
      {(jx)=>{
        return (
          <nav className={classes.nav}>
          <ul>
            {jx.isLoggedIn && (
              <li>
                <a href="/">Users</a>
              </li>
            )}
            {jx.isLoggedIn && (
              <li>
                <a href="/">Admin</a>
              </li>
            )}
            {jx.isLoggedIn && (
              <li>
                <button onClick={props.onLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
        )
      }}
    </IsLoggedInContext.Consumer>
  );
};

export default Navigation;
