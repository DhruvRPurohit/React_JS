import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
const Update = () => {

  const [data,setData]=useState([])
  const {id}=useParams()
  const navigate =useNavigate()

  useEffect(()=>{
    axios.get('http://localhost:3000/user/'+id)
      .then(res=>(setData(res.data)))
      .catch(err=>console.log(err))
  },[])


  const handelSubmit=(e)=>{
    e.preventDefault()
    axios.put('http://localhost:3000/user/'+id,data)
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>console.log(err))
      navigate('/')
  }
  return (
    <div>

       <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'> 

        <div className='w-50 border bg-white shadow px-5 pt-5 pb-5 rounded'>
          <h1>Edit user data</h1>
          <div className='mb-2'>
            <label htmlFor="name">Name:</label>
            <input type="text" name='name' className='form-control' placeholder='Enater your Name' value={data.name} onChange={e=>setData({...data,name:e.target.value})} />
          </div>

          <div className='mb-2'>
            <label htmlFor="Email">Eamil:</label>
            <input type="text" name='email' className='form-control' placeholder='Enater Email Address' value={data.email} onChange={e=>setData({...data,email:e.target.value})} />
          </div>

          <div className='mb-2'>
            <label htmlFor="Phone">Phone: </label>
            <input type="text" name='phone' className='form-control' placeholder='Enater Phone number' value={data.phone} onChange={e=>setData({...data,phone:e.target.value})} />
          </div> 
          <button className='btn btn-success' onClick={handelSubmit}>Update</button>
          <Link to="/" className='btn btn-primary ms-3'>Back</Link>
        </div>

      </div>
    </div>
  )
}

export default Update