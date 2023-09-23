
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import plants from "./Data";
import image from "./photos/pngaaa.com-1171926.png"
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Cart=()=>{
    const [input,setinput]=useState("");
    const Navigate=useNavigate();
    const [filter,setfilter]=useState(plants);
    const [values,setvalues]=useState([]);
    const [count,setcount]=useState(0);
    const handleData=(id,name)=>{
          const updatedData = [...values, id];
  localStorage.setItem('data', JSON.stringify(updatedData));

  // Then update the state
  setvalues(updatedData);

  toast.success(`Added ${name} to the cart`, {
    position: "top-right",
    autoClose: 1000, // Display for 1 second
  });
    }
    const applyfilter=(data)=>{
     if(data==="all"){
        setfilter(plants);
     }
     else if(data==="indoor"||data==="outdoor"){
        const arr=plants.filter((item)=>item.type===data)
     setfilter(arr);
     }
     else {
        const searchTerm = data.toLowerCase();
        const arr = plants.filter((item) =>
          item.name.toLowerCase().includes(searchTerm)
        );
        setfilter(arr);
      }
}
const storedValues = JSON.parse(localStorage.getItem('data'));
useEffect(()=>{
    if(storedValues){
        setcount(storedValues.length)
    }
},[storedValues])
    useEffect(() => {
        console.log(filter);
    }, [filter]);
    
   return(
    <>
    <div className="header plant_header">
<h1>L-<span className="green">Green</span></h1>
<div className="menu_plants">
<input
  type="text"
  onChange={(e) => {
    setinput(e.target.value);
    applyfilter(e.target.value);
  }}
  placeholder="Search"
  value={input}
/>
    <p onClick={()=>Navigate("/")}>Home</p>
    <p className="count-box" onClick={()=>Navigate("/checkout")}>
    <img className="img" src={image} alt="404"/>
    {count>0?<p className="count">{count}</p>:null}</p>
</div>
                </div>
    <div className="filter">
       <div className="btnpart"> <button className="bttn" onClick={()=>applyfilter("indoor")}>Indoor</button>
        <button className="bttn" onClick={()=>applyfilter("outdoor")}>Outdoor</button>
        <button className="bttn" onClick={()=>applyfilter("all")}>ALL</button></div>
    </div>
    <div className="items">
    {filter.length > 0 ? (
        filter.map((item) => (
            <div className="item" key={item.id}>
                <img src={item.img} alt="404" />
                <h2 className="green">{item.name}</h2>
                <p><strong>PRICE </strong>${item.price}</p>
                <button className="addbtn btn" onClick={()=>handleData(item.id,item.name)}>Add to Cart</button>
            </div>
        ))
    ) : (
        <h1 className="green notfound">No Data Found</h1>
    )}
    <ToastContainer position="top-right" autoClose={1000} />
</div>
</>
   )
}


export default Cart;