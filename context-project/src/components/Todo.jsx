import React, { useContext } from 'react'
import { ToDoContext } from '../context/ToDoContext'

function Todo() {

    let {todos}=useContext(ToDoContext)
  return (
    <div>
      {todos.map(({id,title})=>(
        {title}
      ))}
    </div>
  )
}

export default Todo
