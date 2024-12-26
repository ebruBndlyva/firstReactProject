import { useState } from 'react'

import './App.css'
import { useContext } from 'react'
import { ThemeContext } from './Context/ThemeContext'

function App() {
  let { darkMode, setDarkMode } = useContext(ThemeContext)
  function changeThema() {
    if (darkMode === "Light") {
      setDarkMode("Dark")
    } else {
      setDarkMode("Light")
    }
  }


  return (
    <div className={darkMode === "Light" ? "lightMode": "darkMode"}>
      Thema Change : <button onClick={() => changeThema()}>{darkMode === "Light" ? "Light Theme": "Dark Theme"}</button>
     
    </div>
  )
}

export default App
