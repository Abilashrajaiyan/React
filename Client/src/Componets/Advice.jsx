/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const Advice = () => {
    const [advice, setAdvice] = useState("Press Button for advice");
    const [count, setCount] = useState(0);

    async function handler(){
        const res = await fetch("https://api.adviceslip.com/advice")
        const data = await res.json()
        setAdvice(data.slip.advice);
        setCount((c)=>c+1)

    }
  return (
    <div className='d-flex justify-content-center align-items-center flex-column bg-secondary'>
        <h1>{advice}</h1>
        <button onClick={handler} className='btn btn-danger'>Click Here</button>
        <p>You have Counted <b>{count}</b> times</p>
    </div>
  )
}

export default Advice