import React from 'react'
import { useState } from "react"
function Counter() {
  
     let [count,setCount]=useState(0)
     function handleDec(){
        if(count>0){
            setCount(--count)
        }
     
      }
      function handleInc(){
        setCount(++count)
       }

  return (
    <div className='counter'>
         <button onClick={()=>handleDec()}>-</button>
        <span>{count}</span>
        <button onClick={()=>handleInc()}>+</button>
        <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter
