import React from "react";
import './Project.css';
import medinavi from'../../assests/medinavi.png';
import snake_game from '../../assests/snake_game.png';
import travel_tracker from '../../assests/travel_tracker.png';
import BookNexus from '../../assests/BookNexus.png';

const Project=()=>{
    return (
        <section id="project">
        <div className="project_heading">
             <h1>Projects</h1>
        </div>
          <div className="projects">
           
          <a href="https://book-nexus-frontend.vercel.app/" target="blank">
            <div className="project">
              <img src={BookNexus} alt="BookNexus" className="project-img"/>
              <h2>BookNexus</h2>
                <p>
                BookNexus, A e-library Where our mission is to create a haven for readers of all ages, offering a curated selection of books to ignite imaginations and enrich lives.From bestsellers to hidden gems, we take pride in offering a collection that caters to every reader's taste.
                </p>
            </div>
            </a>

          <a href="https://github.com/Saurabhpal052/medinavi" target="blank">
            <div className="project" id="medinavi">
              <img src={medinavi}alt="Medinavi" className="project-img"/>
              <h2>Medinavi</h2>
                <p>
                Medinavi- is a user-focused healthcare solution that combines cutting-edge technology with human expertise. It offers personalized health guidance, symptom-driven diagnosis, doctor recommendations, and appointment booking, all in one place.
                </p>
            </div>
            </a>
            <a href="">
            <div className="project" id="travel-tracker">
              <img src={travel_tracker} alt="Travel-tracker" className="project-img"/>
              <h2>Travel-Tracker</h2>
                <p>
                Travel-Tracker is a user friendly web application. Which help user to track their future travel planning or past travel history.It's make too easy for any user to planning thier upcoming journey.
                </p>
            </div>
            </a>
            <a href="https://github.com/Saurabhpal052/Hungry-Snake" target="blank">
            <div className="project">
              <img src={snake_game} alt="Snake-game" className="project-img"/>
              <h2>Snake-game</h2>
                <p>
                Featuring smooth controls and responsive gameplay, this Snake Game is designed to provide an engaging experience. The score increases with every food item eaten, encouraging players to beat their previous high scores while navigating the increasingly challenging environment.
                </p>
            </div>
            </a>
          </div>
        </section>
    );
}
export default Project;