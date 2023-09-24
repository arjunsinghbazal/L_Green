import React from "react";
import image from "./photos/plants-png-44904.png"
import { useNavigate } from "react-router-dom";
const Main=()=>{
    
const Navigate=useNavigate();
    return(
        <div className="main">
 <div className="header">
<h1>L-<span className="green">Green</span></h1>
<div className="menu">
    <p onClick={()=>Navigate("/cart")}>Plants</p>
    <p onClick={()=>Navigate("/about")}>About</p>
    <p onClick={()=>Navigate("/contact")}>Contact us</p>
</div>
<div className="menu_temp">
<p onClick={()=>Navigate("/cart")}>Plants</p>
</div>
                </div>
    <div className="center">
        <div className="left">
            <h1>Spread <span className="green">green</span> in your life.</h1>
            <h3>Beautiful plants for <span className="green">homes</span> and offices</h3>
            <button onClick={()=>Navigate("/cart")}>Shop now</button>
            <div className="numbers">
                <div className="one">
<p className="cnt">3940+</p>
<p className="name">Customers</p>
                </div>
                <div className="two">
                <p className="cnt">8690+</p>
                <p className="name">Delivered</p>
                </div>
            </div>
        </div>
        <div className="right">
            <img src={image} alt="404"/>
        </div>
    </div>
        </div>
    )
}

export default Main;