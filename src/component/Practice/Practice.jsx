import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Practice = () => {

    const[state, setstate]=useState(0) 
    const[name, setname]=useState(1) 


    const HandleClick=()=>{
        setstate(state+1)
    }

    useEffect(()=>{
        setname(name * 2)
    },[state])
    
  return (
    <div>
        <button>{state}</button>
        <button onClick={HandleClick}>click</button>
        <button>{name}</button>
    </div>
  )
}

export default Practice