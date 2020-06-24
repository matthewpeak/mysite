import React,{useState,useEffect,useRef} from 'react';
import Projects from './projects';
import './Allthe.css';
import Contact from './contact';
import {TweenMax,Power3} from 'gsap';

function Home(){

    let title= useRef(null)
    let blurb= useRef(null)
    const [inProp, setInProp] = useState(true)
    
    useEffect(() => {
        TweenMax.to(
            title,
            7,
            {
                opacity:1,
                y:-20,
                ease:Power3.easeOut,
                delay:.2
            }
        )
        TweenMax.to(
            blurb,
            7,
            {
                opacity:1,
                y:-20,
                ease:Power3.easeOut
            }
        )
    }, []);
    
   
    return(
        <div className="page">
           
           <div 
           ref={el=>{title=el}}
           className="title">
            MATTHEW PEAK IS A DEVELOPER
           </div>
          
           <div className="blurbDiv">
           <div className="blurb" ref={el=>{blurb=el}}>
               MATTHEW IS A NEW YORK CITY BASED FULL STACK DEVELOPER AND DESIGNER 
               WHO ENJOYS COLLABERATING WITH COMPANIES ARTISTS AGENCIES BOTH BIG AND SMALL.
           </div>
           </div>
           <Projects/>
           <Contact/>
           {/* <div ref={divRef} /> */}
        </div>
        
    )
}
export default Home