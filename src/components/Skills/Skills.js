import react from "react";
import './Skills.css';
import UI_UX from '../../assests/UI_UX.jpg';
import web_design from '../../assests/web_development.png';
import cp from '../../assests/c++.png';

const Skills= ()=>{
 return(
    <>
     <section id="Skills">
     <span className="Skill-title">What I do</span>
     <span className="Skill-disrciption"> I am a highly skilled professional with extensive experience in JavaScript, React,express, Node.js and in some other programming language like c++,python. My technical expertise, coupled with a strong problem-solving mindset, makes me an excellent fit for SDE role.</span>
     <div className="Skills-bars">
        <div className="Skill-bar">
            <img className="Skill-bar-img" src={UI_UX} alt="UI_UX-image"/>
            <div className="Skill-bar-text">
                <h2> UI_UX Design</h2>
                <p>I am too proficient in UI_UX Design by using figma tool. I have a lot of experience in making a UI_UX prototype in many projects. </p>
            </div>
        </div>
        <div className="Skill-bar">
            <img className="Skill-bar-img" src={web_design} alt="web_desing-image"/>
            <div className="Skill-bar-text">
                <h2>Web Developer</h2>
                <p>I am too proficient in web development by using specially React ,Node and express framework. I have experience in many website by using postgresSQL databse along with react and node.</p>
            </div>
        </div>
        <div className="Skill-bar">
            <img className="Skill-bar-img" src={cp} alt="cp-image"/>
            <div className="Skill-bar-text">
                <h2>Problem Solving</h2>
                <p> I am too good in problem solving. I have solve more than 500 problems with DSA problems on different platforms like Leetcode,codechef,codeforces etc. </p>
            </div>
        </div>
     </div>

     </section>
    </>
 );
}

export default Skills;