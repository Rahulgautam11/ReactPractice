import React, { useEffect, useState } from 'react'
import './style.scss'

const Todo = () => {
    const [Input, setInput]=useState('')
    const [debounceValue, setDebounceValue]=useState('')
    const [ItemVlue, setItemValue]=useState([])

    const InputValue=(event)=>{
        let data=event.target.value
        setInput(data)
        
    }

    const HandleItem=()=>{
        setItemValue((item)=>{
               return [...item,Input]
        })
        setInput('')
    }
    const Delete=(itm)=>{
        let update= ItemVlue.filter((e)=>e!==itm)
        setItemValue(update)
    }
    const toggleCompletion = (index) => {
        const updatedTodos = [...ItemVlue];
        updatedTodos[index] = updatedTodos[index];
        setInput(updatedTodos);
        
      };
  return (
    <div className='center'>
        <h1>To do</h1>
        
            <input type="text" value={Input} onChange={InputValue} />
            <button onClick={HandleItem}>add</button>
                <ul>
                    {ItemVlue.map((item,index)=>{
                        return(
                    <div key={index}>
                    <li>
                    {item}
                    </li>
                    <button onClick={()=>Delete(item)}>delete</button>
                    <button onClick={()=>toggleCompletion(item)}>update</button>
                    </div>
                            
                        )
                    })}
                </ul>
            
    </div>
  )
}

export default Todo