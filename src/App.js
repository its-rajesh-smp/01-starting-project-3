import React, { useContext, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

import IsLoggedIn_Context from './Context/LogIn/isLoggedIn-Context';

function App() {

  const context=useContext(IsLoggedIn_Context)


  return (

  <>
      <MainHeader />
      <main>
        {!context.isLoggedIn && <Login />}
        {context.isLoggedIn && <Home />}
      </main>


    </>
  );
}

export default App;
