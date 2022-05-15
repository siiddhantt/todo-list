import React from 'react'
import TodoItem from '../Components/TodoItem'

export default function Todos(props){
  let myStyle = {
    backgroundColor: "",
    padding: "5px",
    fontFamily: ""
  }
  return (
    <div className="container text-center rounded-sm">
      <h3 className='my-3 bg-dark rounded-sm text-white-50' style={myStyle}> {props.title}  </h3>
      {props.todos.length===0? "The list is empty :(" :
      props.todos.map((todoLoop)=>{
       return <><TodoItem todo={todoLoop} key={todoLoop.sno} onDelete={props.onDelete} /><hr/></>})}
    </div>
  )
}