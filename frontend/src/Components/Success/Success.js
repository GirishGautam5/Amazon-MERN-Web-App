import React from 'react';
import { useNavigate } from 'react-router-dom';
import './successstyles.css'

function Successpage(props){
    const  navigate = useNavigate();
    const handlesubmit = () => {
        navigate("/");
      }
    return(
      <div className="success-screen">
        <button className="btnhome" onClick={handlesubmit}>Go to Homepage</button>
<div className="card">
      <div className="tick" >
        <i className="checkmark">✓</i>
      </div>
        <h1 className="h1class">Success</h1> 
        <p className="pclass">We received your purchase request;<br/> we'll be in touch shortly!</p>

      </div>  
      </div>  )
}

export default Successpage;