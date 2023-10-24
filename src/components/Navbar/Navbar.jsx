import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";



export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    // Check the screen width on component mount and when it resizes
    function handleResize() {
      setIsFullScreen(window.innerWidth >= 769); // Adjust the width as needed
    }

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize once to set the initial value
    handleResize();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
     
           <img className={styles.imgsiz}
           src={getImageUrl("contact/rajat.png")}
          
         /><strong>Rajat.dev</strong>
      </a>
      <br />

      <div className={styles.link}>
  <a href="https://linkedin.com/in/rajatpayaal" className={styles.link}>
    <img
      src={getImageUrl("contact/linkedinIcon.png")}
      alt="LinkedIn icon"
      className="small-image"
    />
  </a>
  <a href="https://www.github.com/rajatpayaal/" className={styles.link}>
    <img
      src={getImageUrl("contact/githubIcon.png")}
      alt="Github icon"
      className="small-image"
    />
  </a>
 </div>
      <div className={styles.menu}>
        {!isFullScreen && ( // Check if it's not full-screen
          <img
            className={styles.menuBtn}
            src={
              menuOpen
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/menuIcon.png")
            }
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        )}
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#profile">&nbsp;&nbsp;About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          {/* <li>
            <a href="#about">Skills</a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};
