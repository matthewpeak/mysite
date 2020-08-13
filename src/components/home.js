import React,{useState,useEffect,useRef} from 'react';
import Projects from './projects';
import './styles.css';
import Contact from './contact';
import {TweenMax,Power3,TimelineLite,Power2} from 'gsap';
import {useIntersection} from'react-use'
import gsap from'gsap'


function Home () {

    let title = useRef (null)
    let blurb = useRef (null)
    const [inProp, setInProp] = useState (true)

    let tl = new TimelineLite ();
 
    useEffect( () => {
        TweenMax.to(
            title,
            7,
            {
                opacity:1,
                y:-20,
                ease:Power3.easeOut,
                delay:.2,
            }
        )
        TweenMax.to(
            blurb,
            7,
            {
                opacity:1,
                y:-20,
                ease:Power3.easeOut,
            }
        )
    }, []);
    
    const sectionRef = useRef(null);
  // All the ref to be observed
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  });

  // Animation for fading in
  const fadeIn = element => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: "power4.out",
      stagger: {
        amount: 0.3
      }
    });
  };
  // Animation for fading out
  const fadeOut = element => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out"
    });
  };

  // checking to see when the vieport is visible to the user
  intersection && intersection.intersectionRatio < 0.5
    ? fadeOut(".projectDiv")
    : fadeIn(".projectDiv");
    
   
    return(
        
        <div className="page">
           <div ref = { el => {title=el} } className="title">
            MATTHEW
            PEAK.
           </div>
           <div className="blurbDiv">
           <div className="blurb" ref = { el => { blurb = el} }>
               MATTHEW IS A NEW YORK CITY BASED SOFTWARE ENGINEER AND DESIGNER 
               WHO ENJOYS COLLABERATING WITH COMPANIES ARTISTS AGENCIES BOTH BIG AND SMALL.
           </div>
           </div>
         <div className = 'projectDiv' ref = { sectionRef}>
            <h5  className = 'miniTitle'> PROJECTS: </h5>
             <div className = "projectCard">
            <h1 className = 'projectTitle'>
            LET'S DISCO BABY! 
            </h1>
            <div className = "infoContainer">
            <div className = "imageContainer">
            <img  className = 'discoImage' src = "/letsDisco.png" alt = "discoImage"></img>
            </div>
            <div className = "info">
            Let's Disco Baby! is a fully customizable digital audio workspace and visualizer
            that leverages three dimensional graphics. Built using Rails, React, Tone.js, Three.js. 
            </div>
            </div>
        </div>
        </div>
        <div className = "emailContainer">
        <div className = "line"> </div>
        <div className = "hitMeUp">
           HIT ME UP 
        </div>
        <a  className = "email">
            matthewpeak@gmail.com
        </a>
        <a href = "https://www.linkedin.com/in/matthew-peak-450b624b/" className = "linkedIn">
            LinkedIn
        </a>
        <a href = "https://www.medium.com/@matthewvondanger" className = "blog">
            Blog
        </a>    
        </div>
        
        </div>
        
    )
}
export default Home