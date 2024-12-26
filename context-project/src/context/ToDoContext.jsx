import React, { createContext, useState } from 'react'



export const ToDoContext = createContext()

function ToDoProvider({ children }) {
    let [todos, setTodos] = useState([
        {
            id: 1,
            title: "Learn React",

        },
        {
            id: 2,
            title: "Learn Node",

        },
        {
            id: 3,
            title: "Learn Express",

        }
    ])
    const values = {
        todos,
        setTodos
    }
    return (
        <ToDoContext.Provider value={values}>
            {children}
        </ToDoContext.Provider>
    )
}

export default ToDoProvider
