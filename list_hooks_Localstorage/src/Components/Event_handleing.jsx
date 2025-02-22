import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';


const EventHandling = () => {
  const [text, setText] = useState("Not Clicked");

  const handleClick = () => {
    setText("Clicked");
  };
  const handleinput=(e)=>{
    setData(e.target.value)
  }
  const [data,setData]=useState("")
  return (
    <div className="vh-100 w-100">
      <Button variant="outline-primary mx-1" size="lg" className="shadow-lg fw-bold mt-2" onClick={handleClick}>
        {text}
      </Button>

      <div className="row mt-4">
          <label htmlFor="" className="col-2">Enter something : </label>
          <input type="text" className="col-2 border rounded" value={data} placeholder="Enter something.." onChange={handleinput}/>
          <label htmlFor="">You Typed : {data}</label>
      </div>
    </div>
  );
};

export default EventHandling;
