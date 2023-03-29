import React, { useState,useEffect } from 'react';



const IsLoggedIn_Context=React.createContext()



const IsLoggedIn_Provider=(props)=>{
    
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(()=>{
        if(localStorage.getItem("isLoggedIn")==="1"){
          setIsLoggedIn(true)
        }
    },[])


    const loginHandler = (email, password) => {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn" , "1")
    };
    

    const logoutHandler = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("isLoggedIn")
    };


    
    return (
        <IsLoggedIn_Context.Provider  value={
            {
                isLoggedIn,
                setIsLoggedIn,
                loginHandler,
                logoutHandler
            }} >
            {props.children}
        </IsLoggedIn_Context.Provider>
    )
}




export default IsLoggedIn_Context
export {IsLoggedIn_Provider}