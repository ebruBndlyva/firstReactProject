import React, { useContext, useState } from 'react'
import { ToDoContext } from '../context/ToDoContext'

function AddTodo() {
    let [inputValue, setInputValue] = useState('')
    let { todos, setTodos } = useContext(ToDoContext)
    function handleSubmit(e) {
        e.preventDefault()
        setTodos([...todos, {
            id: todos.length + 1,
            title: inputValue
        }])
        setInputValue('')
    }

    return (
        <div className='m-5'>
            <form onSubmit={(e) => handleSubmit(e)} >
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddTodo
