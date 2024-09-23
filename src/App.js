import Navbar from "./components/Nav/Navbar";
import Intro from "./components/Introduction/Intro";
import Skills from "./components/Skills/Skills";
import Tech_skills from "./components/Tech_skills/Tech_skills";
import Project from "./components/Project/Project";
import Contact from "./components/Contacts/Contacts";
import Footer from "./components/Footer/footer";
function App() {
  return (
    <div className="App">
     
      <Navbar/>
      <Intro/>
      <Skills/>
      <Tech_skills/>
      <Project/>
      <Contact/>
      <Footer/>
         </div>
  );
}

export default App;
