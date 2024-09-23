import React from "react";
import './Intro.css';
import pic from '../../assests/profilepic.png';
import { Link } from "react-scroll";
import hireimg from '../../assests/hireme.png';
import { Typewriter } from 'react-simple-typewriter'
const Intro=()=>{
    return(
        <>
       <section className="Intro">
        <div className="Introcontent">
          <span className="hello"> Hello,<br/></span>
          <span className="introtext">I'm <span className="introname"> Saurabh</span><br/> I'm a <span className="animation"> <Typewriter
            words={['Full Stack Developer.', 'Compitative programmer.', 'Open Source Contributor.', 'Free-lancer.']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={80}
            deleteSpeed={80}
            delaySpeed={1000}
          /></span></span>
          <p className="Intropara"> I'm skilled and very proficient in web developing and i have a lot of hand-on<br/> experience in web designing </p> 
          <Link><button className="btn"><img src={hireimg} className="btn-img" alt="btn-img" /> Hire me</button></Link>
        </div>
        <img src={pic} className="Profile-img" alt="Profile-img"/>
        
       </section>
        </>
    );
}

export default Intro;