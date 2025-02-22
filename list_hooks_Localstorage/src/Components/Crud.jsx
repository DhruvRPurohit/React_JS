import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Crud = () => {

    const [data,setData]=useState({
        name:'',
        gmail:'',
        password:''
    })

    const [alldata,setAlldata]=useState([])

    const handlesubmit = (e)=>{
        e.preventDefault()
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
        
        if(data.name == ''){
            alert('Please Enter your name')
        }
        else if(!emailRegex.test(data.gmail)){
            alert('Please Enter valid Email address')
        }
        else if(!passwordRegex.test(data.password)){
            alert('please Enter valid 8 characters long with atleast a number and Digit')
        }
        else{
            setAlldata([...alldata,data])
            setData({
                name:'',
                gmail:'',
                password:'' 
            })
        }
    }

  return (
    <div className='vh-100 w-100 d-flex justify-content-center align-items-center flex-column'>
        <div className='card rounded border shadow w-50 d-flex justify-content-center align-items-center pt-3 pb-3'>
            <h2>Crud Operation</h2>
            <form action="#" method='post'onSubmit={handlesubmit} >
                <label htmlFor="">Name :</label>
                <input type="text" placeholder='Enter your name' className='form-control'value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}/> 
                <br />

                <label htmlFor="">Gmail :</label>
                <input type="text" placeholder='Enter your Gmail with @' className='form-control' value={data.gmail} onChange={(e)=>setData({...data,gmail:e.target.value})}/>
                <br />

                <label htmlFor="">Password :</label>
                <input type="text" placeholder='Enter your Gmail' className='form-control' value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}/>
                <br /> 

                <button className='btn btn-success shadow '>Submit</button>
            </form>
        </div>

        <div className='card rounded border shadow w-50 d-flex justify-content-center align-items-center mt-3'>
            <table className='table table-striped-bordered-responsive pe-10'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Gmail</th>
                        <th>Password</th>
                    </tr>
                </thead>

                <tbody >
                    {
                        alldata.map((item,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.gmail}</td>
                                    <td>{item.password}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        </div>
    </div>
  )
}

export default Crud