import React, { useContext } from 'react'
import { ToDoContext } from '../context/ToDoContext'

function Todos() {
    let { todos } = useContext(ToDoContext)
    return (
        <ul>
            {
                todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))
            }
        </ul>
    )
}

export default Todos
