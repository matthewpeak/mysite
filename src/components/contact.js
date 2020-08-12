import React,{useState} from 'react';
import './styles.css'

function Contact () {
 
    return(
        <div>
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

export default Contact