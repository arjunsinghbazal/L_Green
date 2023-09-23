import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Landing=()=>{
const navigate=useNavigate();
    const [phone, setPhone] = useState('');
    const handleData=()=>{
        if(phone.length>4){
            toast.success("Successfully register",{position: "top-left",
            autoClose: 1500})
setTimeout(()=>{navigate("/main")},2000)
        }
        else {if(phone===""){
            toast.warn("Please Enter your Name First",{position: "bottom-left",
            autoClose: 2000})
        }
        else{
            toast.error("Name Should be more then 5 Characters",{position: "bottom-left",
            autoClose: 2000})
        }}
    }
    return(
        <div className="landing">
            <div className="box">
            <input type="text" placeholder="Enter your name here" onChange={(e)=>setPhone(e.target.value)} value={phone}/>
            <button className="btn" onClick={handleData}>Register</button>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default Landing;