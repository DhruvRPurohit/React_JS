import React from 'react'
import { useState,useRef } from 'react';
const UseRef_hook = () => {
    const [count, setCount] = useState(0);
    const renders = useRef(0); // useRef to track renders without re-rendering
  
    renders.current += 1; 
  return (
    <div className='vh-100 w-100 d-flex justify-content-center align-items-center'>
          <div className='h-50 w-50 d-flex flex-column justify-content-center align-items-center border rounded shadow'>
          <h2>{count}</h2>
          <h4>Component Rendered:{renders.current}</h4>
            <div>
                <button className='btn  btn-success mx-1' onClick={()=>setCount(count+1)}>Add</button>
                <button className='btn  btn-danger mx-1'onClick={()=>setCount(count -1)}>Minus</button>
            </div>
          </div>
    </div>
  )
}

export default UseRef_hook