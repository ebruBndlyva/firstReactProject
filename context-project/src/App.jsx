import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import TodoNavbar from './components/TodoNavbar';
import Main from './components/Main';
import AddTodo from './components/AddTodo';

function App() {


  return (
    <>
      <TodoNavbar />
      <AddTodo />
      <Main />
    </>
  )
}

export default App
