 import React from 'react';
 const TodoItem=(props)=>{
 	return (<li onClick={ ()=>props.clickHandler(props.index)} className={props.detail.completed ? 'completed' : ''} >{props.detail.name}</li>)
 }    

export default TodoItem;