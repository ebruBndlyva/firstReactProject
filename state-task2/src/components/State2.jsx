

import { useState } from 'react'
import React from 'react'




function State2() {
  const [isValue, setValue] = useState(true)
  function handleTrue() {
    setValue(!isValue)
  }



  return (
    <div>
      {

        <div>
          <button onClick={() => handleTrue()}>{isValue ? "Hide" : "Show"}</button>
          {isValue && <p>This is text</p>}
        </div>
      }


    </div>
  )
}

export default State2
