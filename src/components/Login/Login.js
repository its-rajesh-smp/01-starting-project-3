import React, {  useReducer, useState ,useEffect} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';


const reducerEmailFunctions=(emailState,action)=>{

  if(action.type==="SET_EMAIL")
  {
    return {value:action.value , isValid:action.value.includes("@")}
  }
  if(action.type==="CHECK_EMAIL_BLUR")
  {
    return {value:emailState.value , isValid:emailState.value.includes("@")}
  }
  return {value:"",isValid:false}
}


const reducerPasswordFunctions=(passWordState,action)=>{
  if(action.type==="SET_PASSWORD")
  {
    return {value:action.value , isValid:action.value.trim().length > 6}
  }
  if(action.type==="CHECK_PASSWORD_BLUR")
  {
    return {value:passWordState.value , isValid:passWordState.value.trim().length > 6}
  }
  return {value:"",isValid:false}
}


const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);


  const[emailState,dispatchEmail]=useReducer(reducerEmailFunctions,{value:"",isValid:null})
  const[passWordState,dispatchPassword]=useReducer(reducerPasswordFunctions,{value:"",isValid:null})



  // useEffect(()=>{
  //   console.log("MAIN FUNCTION");

  //   return ()=>{
  //     console.log("CLEANER FUNCTION");
  //   }
  // },[enteredEmail])

 

  //! Object Distructuring
  const{isValid:BOOL_emailState}=emailState
  const{isValid:BOOL_passwordState}=passWordState


  useEffect(()=>{
    const clearCheckValidationTimer=setTimeout(function() {
      setFormIsValid( BOOL_emailState && BOOL_passwordState );
      console.log("sdfsdf");
    }, 500);
    return ()=>{
      clearTimeout(clearCheckValidationTimer)
      console.log("CHECK");
    }
  },[BOOL_emailState,BOOL_passwordState])




  const emailChangeHandler = (event) => {
    dispatchEmail({type:"SET_EMAIL" , value:event.target.value})
   
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type:"SET_PASSWORD" , value:event.target.value})
  };

  const validateEmailHandler = () => {
    dispatchEmail({type:"CHECK_EMAIL_BLUR"})
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type:"CHECK_PASSWORD_BLUR"});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passWordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passWordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passWordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
