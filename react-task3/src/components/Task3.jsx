

import React from 'react'
import { useState } from 'react'

function Task3() {
    const [count, setCount] = useState(16)

    function handleClick1() {
        setCount(count+2)
    }
    function handleClick2() {
        if(count>10){
            setCount(count-2)
        }

      
    }
    return (
        <div>

            <p  style={{ fontSize: `${count}px`,color:"yellow" }}>jhdbfjhdbfhd</p>
            <button onClick={() => handleClick1()}>increase</button>
            <button onClick={() => handleClick2()}>decrease</button>
        </div>
    )
}

export default Task3
