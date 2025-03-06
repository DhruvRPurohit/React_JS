import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Fetchdata = () => {
    const [data,setData]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/users')
            .then(res=>setData(res.data))
            .catch(err=>console.log(err))
    },[])

    return (
    <div className='vh-100 w-100 d-flex justify-content-center align-items-center'>
        <div className='card border shadow w-50 pt-5 pb-5 px-5'>
            <h2>User Data</h2>
            <table className='table table-striped'>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                </thead>

                <tbody>
                    {
                        data.map((item,index)=>(
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Fetchdata