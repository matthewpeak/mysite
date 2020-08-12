import React,{useState,useEffect,useRef} from 'react';
import './styles.css'
import {TimelineLite,Power2} from 'gsap';


function Projects (params) {

  let imageShield = useRef (null)
  let image = useRef (null)
 
  let tl = new TimelineLite ();
  useEffect( () => { 
    tl.to(imageShield,1.4,{width:'0%',ease:Power2.easeInOut})
  })

    return(
    <div className = 'projectDiv'>
      <h5 className = 'miniTitle'>PROJECTS:</h5>
       <div className = "projectCard">
        <h1 className = 'projectTitle'>
        LET'S DISCO BABY! 
        </h1>
        <div className = "infoContainer">
        <div className = "imageContainer">
        <div ref={ el => imageShield = el} className = "imageShield">
        <img ref= {el=> image = el } className = 'discoImage' src = "/letsDisco.png" alt = "discoImage"></img>
        </div>
        </div>
        <div className = "info">
          Let's Disco Baby! is a fully customizable digital audio workspace and visualizer
          that leverages three dimensional graphics. Built using Rails, React, Tone.js, Three.js. 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects