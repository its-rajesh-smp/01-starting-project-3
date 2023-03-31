import React, {  useReducer, useState ,useEffect ,useContext} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import IsLoggedIn_Context from '../../Context/LogIn/isLoggedIn-Context';
import Inputs from '../Input/Input';


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
  const [formIsValid, setFormIsValid] = useState(false);


  const[emailState,dispatchEmail]=useReducer(reducerEmailFunctions,{value:"",isValid:null})
  const[passWordState,dispatchPassword]=useReducer(reducerPasswordFunctions,{value:"",isValid:null})


 

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
   context.loginHandler(emailState.value, passWordState.value);
  };


  const context=useContext(IsLoggedIn_Context)

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>



          <Inputs type="email" State={emailState} value={emailState.value} onChange={emailChangeHandler} onBlur={validateEmailHandler} />
          <Inputs type="password" State={passWordState} value={passWordState.value} onChange={passwordChangeHandler} onBlur={validatePasswordHandler} />





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
