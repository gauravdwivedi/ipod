import React from 'react';
import './wheel.css';


 const Wheel = (props)=>{
   return (

   
        <div className="outer">
           
          <div className="controlouter" id="outerwheel" onClick={props.rotate} >
            <p id="menu"><button id="menu-btn" onClick={props.screen}>MENU</button></p>
            <p id="previous">&lt;&lt;</p>
            <p id="play">▷||</p>
            <p id="next">&gt;&gt;</p>
            <div className="controlinner" onClick={props.innerBtn}>
            </div>
          </div>
        </div>
      );
    }


export default Wheel;