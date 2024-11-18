/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [times, setTimes] = useState(0);

    useEffect(()=>{
        console.log("Hi im abilash");
    })
  return (
    <div>
        <h1>Count:{count}</h1>
        <h1>Times:{times}</h1>
        <button className='btn btn-danger' onClick={()=>setCount((value)=>value-1)}>-</button>
        <button className='btn btn-primary' onClick={()=>setCount((value)=>value+1)}>+</button>
        <button className='btn btn-primary' onClick={()=>setTimes((value)=>value+1)}>T</button>
    </div>
  )
}

export default UseEffect