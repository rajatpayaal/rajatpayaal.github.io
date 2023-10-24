
import styles from './App.module.css'
import Particles from 'react-tsparticles'
import Particle from './components/Particle'
import React, { useState, useEffect } from "react";
import { Navbar } from './components/Navbar/Navbar';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects} from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';
import { Profile } from './components/Profile/Profile';
import { Pas } from './components/Pas/pas';
import { Contact } from './components/contact/contact';



function App() {

  return  (
  <div>
    <div>
    {/* <div className={styles.App}><Navbar /><About /><Experience /> <Projects /><Skills /><Profile /><Pas /><Contact /><Particle /></div> */}
     <div className={styles.navbar}> 
     
     <Navbar/>
     <div className={styles.About}><About/>
     <Experience/>
     <Projects/>
     <Skills />
     <Particle />
     <Profile />
     <Pas />
     <Contact />
     </div>
     </div>
     




    </div>
  </div>
  );

  function Cursor() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
  
    const logMousePosition = (e) => {
      setX(e.clientX);
      setY(e.clientY);
  
      e.target.setAttribute("style", "top: " + e.clientY + "px; left: " + e.clientX + "px;");
  
    };
  
    useEffect(() => {
  
      document.addEventListener("mousemove", logMousePosition);
    }, []);
  
    return <span></span>;
  }
  }

export default App;
