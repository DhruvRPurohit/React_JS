import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Login = () => {
    const [status,setStatus]=useState("Please Login !")
    const [login,setLogin]=useState("Login")

    const handle=()=>{
        setStatus(status==="Please Login !"?"You have been Login Sucessfully ":"Please Login !")
        setLogin(login==="Login"?"Log out":"Login")
        let age = prompt("Enter your age ?")
        age >= 18 ? console.log("You are Elgible for vote.") : console.log("You are not Elgible for vote.")
    }

    return (
    <div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
        <div className='card border shadow px-5 pt-5 pb-5'>
            <p>{status}</p>
            <Button variant="outline-success" onClick={handle}>{login}</Button>
        </div>
    </div>
  )
}

export default Login