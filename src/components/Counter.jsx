import React, { useState } from 'react';
import styles from "./Counter.module.css"

const Counter = () => {
   const [count, setCount] = useState(0)

    const handleChange =(val)=>{
        setCount(count + val)
    }   
    const handleDouble =(val)=>{
        setCount(count * val)
    }
  return (
    <div className={styles.container}>
        <h1>Counter</h1>
        <h2>{count}</h2>
        <button onClick={()=>handleChange(+1)}>Increment</button>
        <button onClick={()=> handleChange(-1)}>Decremet</button>
        <button onClick={()=> handleDouble(2)}>Double</button>

    </div>
  )
}

export default Counter