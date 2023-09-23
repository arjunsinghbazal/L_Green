import React from "react";
import Landing from "./landing";
import Main from "./Main";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Plants from "./plants";
import Checkout from "./Checkout";
import { ToastContainer } from "react-toastify";
function App() {
  return (
   <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Landing}/>
          <Route path="/main" Component={Main}/>
          <Route path="/about" Component={About}/>
          <Route path="/contact" Component={Contact}/>
          <Route path="/cart" Component={Plants}/>
          <Route path="/checkout" Component={Checkout}/>

        </Routes>
        <ToastContainer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
