import React from 'react';
import classes from './Button.css';

const isOperator =val =>{
   return !isNaN(val)||val==="."||val==="=";
}
const Button =props =>{
   let attachedClasses =[classes.Button];
   if(!isOperator(props.children))
   {
      attachedClasses = [classes.Operator,classes.Button];
   }
   
return (<div className ={attachedClasses.join(' ')} 
 onClick ={()=>props.handleClick(props.children)}>
{props.children}
</div>)};

export default Button;