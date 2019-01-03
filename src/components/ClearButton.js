import React from 'react';
import classes from './ClearButton.css';

export const ClearButton =(props)=>
{
    return(
        <div className={classes.ClearButton} onClick={props.handleClick}>{props.children}</div>
    );
};