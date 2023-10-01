import React, { useCallback, useMemo, useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Todo from '../TOdo'

const Practice = () => {
  const [add, setadd] = useState(0)
  const [sub, setsub] = useState(100)

  // const HandleClickAdd = () => {
  //   // console.log('add...')  
  //   setadd(add + 1)
  // }
  const HandleClickSub = () => {
    // console.log('sub...')
    setsub(sub - 1)
  }
  const multiplication = useMemo(() => {
    // console.log('multiplication')
    return add * 2
  }, [add])
  const HandleClickAdd = useCallback(() => {
    setadd(add + 1)
  }, [add])

  const inputRef = useRef()
  // const inputvalue = inputRef.target.value
  let InputValue = [];
  const handleValue = (e) => {
    e.preventDefault()
    InputValue.push(inputRef.current.value)
    console.log(InputValue)
  }
  return (
    <div>
      {/* uncontrolled component */}
      <input type="text" ref={inputRef} />
      <button onClick={handleValue}>done</button>
      <p>{InputValue}</p>
      {/* uncontrolled component end */}


      <Todo add={add} HandleClickAdd={HandleClickAdd} />
      <button> ++{add} </button>
      {/* <button onClick={HandleClickAdd}>add</button> */}
      <button onClick={HandleClickSub}>sub</button>
      <button>__{sub}</button><br />
      {multiplication}


    </div>
  )
}

export default Practice