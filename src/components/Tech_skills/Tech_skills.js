import React from "react";
import './Tech_skills.css';
import html from '../../assests/html.png';
import node from '../../assests/node.png';
import bootstrap from '../../assests/bootstrap.png';
import c from '../../assests/c.png';
import c1 from '../../assests/c++1.png';
import css from '../../assests/css.png';
import docker from '../../assests/docker.png';
import express from '../../assests/express-js.png';
import git from '../../assests/git.png';
import github from '../../assests/github.png';
import java from '../../assests/java.png';
import js from '../../assests/js.png';
import postman from '../../assests/postman.png';
import postgres from '../../assests/postgress.png';
import r from '../../assests/r.jpeg';
import react from '../../assests/react.jpeg';
import tailwind from '../../assests/tail-wind.png';
import vscode from '../../assests/vscode.jpeg';
import mysql from '../../assests/mysql.png';
import python from '../../assests/python.jpeg';
import mogngoDB from '../../assests/mongodb-atlas.png';
const Tech_skills=()=>{
    return (
       <section id="Tech_skill">
        <div className="Tech_title">
            <h1 className="Tech_title_h1">Skills</h1>
        </div>
        <div className="Tech_content">
            <div className="Front-end">
                 <h2 className="front-heading">Frontend</h2>
                <div className="Front-end-items" >
                     <div className="Front-end-item">
                        <img src={html} alt="HTML" className="html"/>
                         <p className="html-para">HTML</p>
                     </div>
                     <div className="Front-end-item">
                     <img src={css} alt="CSS" className="css"/>
                     <p className="css-para">CSS</p>
                     </div>
                     <div className="Front-end-item">
                     <img src={js} alt="JS" className="js"/>
                     <p className="js-para">JavaScript</p>
                     </div>
                     <div className="Front-end-item">
                     <img src={react} alt="React" className="react"/>
                     <p className="react-para">React</p>
                     </div>
                     <div className="Front-end-item">
                     <img src={tailwind} alt="Tail-wind" className="Tail-wind"/>
                     <p className="Tail-wind-para">Tailwind CSS</p>
                     </div>
                     <div className="Front-end-item">
                     <img src={bootstrap} alt="bootstrap" className="bootstrap"/>
                    <p className="bootstrap-para">Bootstap</p>
                     </div>
                </div>
            </div>
            <div className="Back-end"> 
            <h2 className="back-heading">Backend</h2>
                <div className="Back-end-items" >
                <div className="Back-end-item">
                    <img src={node} alt="nodejs" className="nodejs"/>
                    <p className="node-para">NodeJs</p>
                </div>
                <div className="Back-end-item">
                <img src={express} alt="express" className="express"/>
                <p className="express-para">ExpresJs</p>
                </div>
                <div className="Back-end-item">
                <img src={mysql} alt="Mysql" className="mysql"/>
                <p className="mysql-para">Mysql</p>
                </div>
                <div className="Back-end-item">
                   <img src={postgres} alt="Postgres" className="Postgres"/>
                   <p className="Postgres-para">PostgresSQL</p>
                </div> 
                <div className="Back-end-item">
                   <img src={mogngoDB} alt="mongodb" className="mongodb"/>
                   <p className="Postgres-para">MongoDB</p>
                </div>   
                </div>
            </div>
            <div className="language">
            <h2 className="language-heading">Language</h2>
                <div className="language-items" >
                <div className="language-item">
                    <img src={c1} alt="c++" className="c++"/>
                    <p className="c++-para">C++</p>
                </div>
                <div className="language-item">
                <img src={c} alt="c" className="c"/>
                <p className="c-para">C</p>
                </div>
                <div className="language-item">
                <img src={js} alt="JS" className="js"/>
                <p className="js-para">JavaScript</p>
                </div>
                <div className="language-item">
                <img src={python} alt="python" className="python"/>
                <p className="python-para">Python</p>
                </div>
                <div className="language-item">
                <img src={r} alt="r" className="r"/>
                <p className="r-para">R</p>
                </div>
                <div className="language-item">
                <img src={java} alt="java" className="java" />
                <p className="java">Java</p>
                </div>
                </div>
                </div>
            <div className="tools">
            <h2 className="tools-heading">Tools</h2>
                <div className="tools-items" >
                <div className="tools-item">
                    <img src={github} alt="github" className="github"/>
                    <p className="github-para">Github</p>
                </div>
                <div className="tools-item">
                <img src={git} alt="git" className="git"/>
                <p className="git-para">Git</p>
                </div>
                <div className="tools-item">
                <img src={vscode} alt="vscode" className="vscode"/>
                <p className="vs-para">VsCode</p>
                </div>
                <div className="tools-item">
                <img src={postman} alt="postman" className="postman"/>
                <p className="postman-para">PostMan</p>
                </div>
                <div className="tools-item">
                <img src={docker} alt="docker" className="docker"/>
                <p className="docker-para">Docker</p>
                </div>
                </div>
                </div> 
            </div>
       </section>
    );
}
export default Tech_skills;