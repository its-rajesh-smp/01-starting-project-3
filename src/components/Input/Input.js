import React from 'react';
import classes from "../Login/Login.module.css"
import "./Input.css"


function  Inputs (props) {
    return ( 

        <div
          className={`${classes.control} ${
            props.State.isValid === false ? classes.invalid : ''
          }`}
        >
          <label className='InputLabel' htmlFor={props.type}>{props.type}</label>
          <input
            type={props.type}
            id={props.type}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
          />
          
        </div>
    );
}

export default Inputs;
