import React, { useState } from "react";
import '../Nav/Navbar.css'
import logo from '../../assests/logo.jpeg';
import contactimg from '../../assests/message.jpg'
import { Link } from 'react-scroll';
import menu from '../../assests/menu.png';


const Navbar=()=>{
    const [showmenu,setShowmenu]=useState(false);
    return (
    <>
        <nav className="navbar">
            <img className="logo" src={logo} alt="logo"/>
            <div className="navbaritems">
            <Link activeClass='active' to="Intro" spy={true} smooth={true} offset={-100}  duration={400} className="navbaritemslist">Home</Link>
            <Link activeClass='active' to="Skills" spy={true} smooth={true} offset={-50}  duration={400} className="navbaritemslist">About</Link>
            <Link activeClass='active' to="Tech_skill" spy={true} smooth={true} offset={-50}  duration={400} className="navbaritemslist">Skills</Link>
            <Link activeClass='active' to="project" spy={true} smooth={true} offset={-50}  duration={400} className="navbaritemslist">Projects</Link>
            </div>
            <button className="navbarbtn" onClick={
                ()=>{
                    document.getElementById("contact-section").scrollIntoView({behavior:'smooth'});
                }
            }>
                <img src={contactimg} className="navbarbtnimg" alt="contact img" /> Contact me
            </button>
          <img src={menu} alt="menu" className="menu-img"  onClick={()=>setShowmenu(!showmenu)}/>
          <div className="mob-navmenu" style={{display:showmenu?"flex":"none"}}>
            <Link activeClass='active' to="Intro" spy={true} smooth={true} offset={-100}  duration={400} className="mob-navbaritemslist" onClick={()=>setShowmenu(false)}>Home</Link>
            <Link activeClass='active' to="Skills" spy={true} smooth={true} offset={-50}  duration={400} className="mob-navbaritemslist" onClick={()=>setShowmenu(false)}>About</Link>
            <Link activeClass='active' to="Tech_skill" spy={true} smooth={true} offset={-50}  duration={400} className="mob-navbaritemslist" onClick={()=>setShowmenu(false)}>Skills</Link>
            <Link activeClass='active' to="project" spy={true} smooth={true} offset={-50}  duration={400} className="mob-navbaritemslist" onClick={()=>setShowmenu(false)}>Projects</Link>
            <Link activeClass='active' to="contact-section" spy={true} smooth={true} offset={-50}  duration={400} className="mob-navbaritemslist" onClick={()=>setShowmenu(false)}>Contact</Link>
            </div>


        </nav>
    </>
    );
}

export default Navbar;