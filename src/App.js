import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import IsLoggedInContext from './Context/LogIn/isLoggedIn-Context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);

  /*
  ! ??????
    if(localStorage.getItem("isLoggedIn")==="1"){
      if(isLoggedIn===false){
        setIsLoggedIn(true)
      }
    }
  */

    useEffect(()=>{
      if(localStorage.getItem("isLoggedIn")==="1"){
        setIsLoggedIn(true)
      }
    },[])


  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn" , "1")
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn")
  };

  return (
    <IsLoggedInContext.Provider value={{isLoggedIn:isLoggedIn}}>

      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>


    </IsLoggedInContext.Provider>
  );
}

export default App;
