import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Home = () => {

    const [data,setData] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:3000/user')
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err))
        console.log(data)
    },[])


    const Delete_Data = (id)=>{
      const confirm = window.confirm("Are you sure you want Delete this data ?")
      if(confirm){
        axios.delete('http://localhost:3000/user/'+id)
          .then(res=>{
            location.reload()
          })
          .catch(err=>console.log(err))
      }
    }
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
          <h1>List of the Users</h1>
            <div className='w-75 rounded bg-white border shadow p-4'>
              <div className='d-flex justify-content-end'>
                  <Link to="/Create" className='btn btn-success'>Add +</Link>
              </div>
              <table className='table table-striped'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    data.map((user,index)=>(
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>
                          <Link to={`/Read/${user.id}`} className='btn btn-sm btn-info me-2 rounded'>Read</Link>
                          <Link to={`/Update/${user.id}`} className='btn btn-sm btn-primary me-2 rounded'>Edit</Link>
                          <button className='btn btn-sm btn-danger rounded' onClick={(e)=>Delete_Data(user.id)}>Delete</button>
                        </td>
                      </tr>
                    )) 
                  }
                </tbody>
              </table>
            </div>
    </div>
  )
}

export default Home