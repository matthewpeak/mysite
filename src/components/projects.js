import React,{useState,useEffect,useRef} from 'react';
import './Allthe.css'
import {TweenMax,Power3} from 'gsap';


function Projects(params) {
  return(
    <div className='projectDiv'>
      <h5 className='miniTitle'>PROJECTS:</h5>
       <div className="projectCard">
        <h1 className='projectTitle'>
        LET'S DISCO BABY! 
        </h1>
        <div className="infoContainer">
        <div className="imageContainer">
        </div>
        <img className='discoImage' src="/letsDisco.png" alt="discoImage"></img>
        
        <div className="info">
          Let's Disco Baby! is a fully customizable digital audio workspace and visualizer
          that leverages three dimensional graphics. Built using Rails, React, Tone.js, Three.js. 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects