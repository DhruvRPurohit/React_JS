import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const Incre_Decre = () => {

    const [num,setNum]=useState(0)
  return (
    <div className='vh-100 w-100 d-flex justify-content-center align-items-center'>
        <div className='card rounded border shadow d-flex justify-content-center align-items-center px-5 pt-5 pb-5'>
            <h3>{num}</h3>
            <div>
                <button className='btn btn-success mx-1' onClick={()=>setNum(num+1)}>Increment</button>
                <button className='btn  btn-danger mx-1'onClick={()=>setNum(num-1)}>Decrement</button>
            </div>
        </div>
    </div>
  )
}

export default Incre_Decre