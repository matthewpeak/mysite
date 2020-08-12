import React,{useState,useEffect,useRef} from 'react';
import Projects from './projects';
import './styles.css';
import Contact from './contact';
import {TweenMax,Power3} from 'gsap';

function Home () {

    let title = useRef (null)
    let blurb = useRef (null)
    const [inProp, setInProp] = useState (true)
    
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
    
   
    return(
        <div className="page">
           
           <div ref = { el => {title=el} } className="title">
            MATTHEW
            PEAK.
           </div>
          
           <div className="blurbDiv">
           <div className="blurb" ref = { el => {blurb=el} }>
               MATTHEW IS A NEW YORK CITY BASED SOFTWARE ENGINEER AND DESIGNER 
               WHO ENJOYS COLLABERATING WITH COMPANIES ARTISTS AGENCIES BOTH BIG AND SMALL.
           </div>
           </div>
           <Projects/>
           <Contact/>
           
        </div>
        
    )
}
export default Home