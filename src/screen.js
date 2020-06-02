import React from 'react';
import './screen.css';
import './wheel.css';

const Screen= (props)=>{

     return (

            <div className="screen" id="mainScreen">
                {/* <span className="heading">Ipod.js</span> */}
               <ul id="list">
                   <li id="songs" className="selected" >Songs</li>
                   <li id="Album">Album</li>
                   <li id="Artist">Artist</li>
                   <li id="Playlists">Playlists</li>
               </ul>
               
            </div>
           
        );
    }

export  default Screen;