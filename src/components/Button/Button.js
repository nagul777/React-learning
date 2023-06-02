import './button.scss';
// import React, { useState } from 'react';

function Button(props){
    return(
        <button className={`${props.bgColor ?props.bgColor : ""} ${props.btntype ?props.btntype : ""}`}>{props.text}</button>
    )
}

export default Button;