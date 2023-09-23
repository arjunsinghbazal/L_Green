import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "./photos/pngaaa.com-1171926.png";
import image2 from "./photos/pngwing.com.png";
import plants from "./Data";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Checkout = () => {
  const Navigate = useNavigate();
const [count,setcount]=useState("");
const [value,setvalues]=useState([]);
  const selectedPlantIds = value ? 
  value.map(item => item) : [];
  const totalPrice = selectedPlantIds.reduce((total, id) => {
    const selectedPlant = plants.find(plant => plant.id === id);
    return selectedPlant ? total + selectedPlant.price : total;
  }, 0);
  const hanleCLick=()=>{
    toast.error(`Your Order is Canceled`, {
      position: "top-right",
      autoClose: 2000, // Display for 3 seconds
    });
    setTimeout(() => {
      Navigate("/")
      localStorage.clear();
    }, 1000);
  }
  const handleOrder=()=>{
    toast.success(`Hurray !!! Lets Makes Your home Greennnnn >> Plants on the Way`, {
      position: "top-right",
      autoClose: 2000, // Display for 3 seconds
    });
    
    setTimeout(() => {
      Navigate("/")
      localStorage.clear();
    }, 1000);
  }
  const removeItem=(i,name)=>{
    value.splice(i, 1);
    toast.error(`Remove ${name} From the cart`, {
      position: "top-right",
      autoClose: 2000, // Display for 3 seconds
    });
  localStorage.setItem('data', JSON.stringify(value));
const data=JSON.parse(localStorage.getItem('data'));
setvalues(data)
  }
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data')) || []; // Initialize as an empty array if no data in local storage
    setvalues(data);
  
    // Set the count based on the length of the data if it's defined
    if (data) {
      setcount(data.length);
    }
  }, [value]);
  return (
    <div className="chk"><ToastContainer position="top-right" autoClose={2000} />
      <div className="header check">
        <h3 className="green aline" onClick={() => Navigate("/cart")}>
          <img className="img" src={image2} alt="404" />
          <p>Continue Shopping</p>
        </h3>
        <div className="menu">
        <p className="count-box" onClick={()=>Navigate("/checkout")}>
    <img className="img" src={image} alt="404"/>
    {count>0?<p className="count">{count}</p>:null}</p>
        </div>
      </div>
      <div className="checkout-container">
        {totalPrice > 0 ? (
          <>
            <h2>Checkout</h2>
            <div className="checkout-items">
              {selectedPlantIds.map((id,i) => {
                const selectedPlant = plants.find((plant) => plant.id === id);
                return (
                  <div key={id} className="checkout-item">
                    <p className="category-name">{selectedPlant.name}</p>
                    <p className="category-price">{selectedPlant.price} INR</p>
                  <p className="red_1" onClick={(i)=>removeItem(i,selectedPlant.name)}>X</p>
                  </div>
                );
              })}
            </div>
            <div className="total-price">
            <p>Total: {totalPrice.toFixed(2)} INR</p>

            </div>
            <div className="checkout-buttons">
              <button className="pay-now-button" onClick={ handleOrder}>Pay Now</button>
              <button className="cancel-order-button" onClick={hanleCLick}>Cancel Order</button>
            </div>
          </>
        ) : (
          <h1 className="red">Your Cart is Empty</h1>
        )}
      </div>
    </div>
  );
};

export default Checkout;
