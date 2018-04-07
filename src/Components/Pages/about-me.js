import React, { Component } from 'react';
import logo from '../../Assets/images/aboutme.gif';
import '../../Assets/css/default.min.css';

class AboutMe extends Component {
  render() {
    return (
    	
     <div className="information">
     <h4><b>ALL ABOUT ME & MY TRAVEL DIARIES</b></h4> 
     <p>Hello! I’m Nikhita Patil , a software professional and welcome to my blog of travel advice and adventures.<br/>
     I believe To travel is to Live.<br/>
     I love travelling and sharing my experiences about the memories created about each place I visit.
     Beaches , Monuments, Forests, Nature makes me the happiest.
     Visiting different places, meeting new people, tasting the local cuisine and shopping is what I love doing on repeat.
     I aspire to travel all around the world and check off places from my travel bucketlist.
     I hope my travel diaries will inspire you to travel and live life to the fullest. 

     </p> 
     <img src={logo} alt="About Me" className="aboutme-img"/>
     </div>
     
     
     );
   }
 }

 export default AboutMe;
