import React, { createContext } from 'react'
import { useState } from 'react'

let mytheme = localStorage.getItem("theme")
export const ThemeContext = createContext()

function ThemeProvider({ children }) {
    let [darkMode, setDarkMode] = useState(mytheme || "Light")
    const values = {
        darkMode,
        setDarkMode
    }
    localStorage.setItem("theme", darkMode)
    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider

