import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AnimatedCursor from "react-animated-cursor"
const root = ReactDOM.createRoot(document.getElementById('root'));
const style={ 
  borderRadius:'50%',border:"2px solid green",
  backgroundColor: 'lightgreen'
  }
root.render(
  <React.StrictMode>
    <App />
    <AnimatedCursor  innerSize={9}
      outerSize={29}
      color="4, 102, 4"
      zIndex={9999999999}
      outerAlpha={0.3}
      innerScale={0.7}
      outerScale={1.5}
      outerStyle={style}
      
/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
