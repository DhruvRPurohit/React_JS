import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Crud = () => {
    const [data,setData]=useState({
        name:"",
        age:""
    })

    const [alldata,setAlldata]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/users')
            .then(res=>setAlldata(res.data))
            .catch(err=>console.log(err))
    },[])

    const savedata = (e)=>{
        e.preventDefault()
        console.log(flag)
        if(flag === null){
            // insert the Data 
            axios.post('http://localhost:3000/users',data)
            .then(res=>{
                console.log(res)
            })
            .catch(err=>console.log(err))
    
        }
        else{
             // Updat the Data
            axios.patch('http://localhost:3000/users/'+flag,data)
                .then(res=>console.log(res))
                .catch(err=>console.log(err))
                setFlag(null)
        }
        window.location.reload()
        setData({
            name:"",
            age:""
        })
    }

    /* Delete the user Data */
    const DeleteData=(Id)=>{
        const confirm = window.confirm("Are you sure you want to Delte this Data ?")

        if(confirm){
            axios.delete('http://localhost:3000/users/'+Id)
                .then(res=>{
                    window.location.reload()
                })
                .catch(err=>console.log(err))
        }
    }
    const [flag,setFlag]=useState(null)

    // Edit Data Function work on the Dispaly data at display
    const EditData=(id)=>{
       const array =alldata.find((item,index)=>{
            return item.id === id;
       })
       console.log(array)
       setData({
        name:array.name,
        age:array.age
       })
       setFlag(id)
    }

  return (
    <div>
        <div className='vh-100 w-100 d-flex justify-content-center align-items-center'>

            <div className='card border shadow w-50 pt-5 pb-5 px-5 '>

                <h3>Add new User Data</h3>
                <form action="#" method='post' onSubmit={savedata}>
                    <label htmlFor="">Name:</label>
                    <input type="text" className='form-control' value={data.name} onChange={(e)=>setData({...data,name:e.target.value})} />
                
                    <label htmlFor="">Age:</label>
                    <input type="number" className='form-control' value={data.age} onChange={(e)=>setData({...data,age:e.target.value})}/>
                    <br />
                    <button className='btn btn-primary'>Save Data</button>
                    
                </form>

            </div>

            <div className='card border shadow w-50 pt-5 pb-5 px-5'>
                <h2>User Data</h2>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            alldata.map((item,index)=>(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>
                                        <button className='btn btn-danger mx-2' onClick={()=>DeleteData(item.id)}>
                                            Delete
                                        </button>
                                        <button className='btn btn-success mx-2' onClick={()=>EditData(item.id)}>
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Crud