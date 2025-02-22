import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const To_do_list = () => {
    const [data,setData]=useState({
        name:""
    })
    const [array,setArray]=useState([])

    const handlesubmit = (e)=>{
        e.preventDefault();
        setArray([...array,data])
        setData({
            name:""
        })
    }

  return (
    <div className='vh-100 w-100 d-flex justify-content-center align-items-center flex-column'>
        <div className='row'>
           <form action="#" method='post' onSubmit={handlesubmit}>
                <input type="text" name='name' value={data.name} onChange={(e)=>setData({name:e.target.value})} className='w-50 rounded col-6 px-5 mx-1' placeholder='Input here'/> 
                <button variant="outline-warning" className='rounded col-4 bg-primary'>Add </button>
           </form>
        </div>
        <div className='card border shadow mt-4'>
            <h4>To do Task List</h4>
            <table className='table table-striped text-dark pz-5 pt-5 pb-5'>
                <tbody>
                    {
                        array.map((item,index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default To_do_list