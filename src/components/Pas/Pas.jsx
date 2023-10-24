import React from "react";
import styles from "./Pas.module.css";
import { getImageUrl } from "../../utils";
// import Carousel from "react-elastic-carousel";

import Slider from "react-slick";

export const Pas = () => {

    return(
       <div >
         <section className={styles.container} id="Personal Acomplishments">
        <p1 className={styles.title11}>Personal Acomplishments </p1>
        <br />
        <br />
        <div>
     <div className={styles.container2} id ="box">
      <div className={styles.box1}><h1> 7+ &nbsp;</h1><br /><p> Open Source Projects </p></div>
      <div className={styles.box1}><h1> 34+ &nbsp; </h1><p> Github Repositories </p></div>
      <div className={styles.box1}><h1> 200+ &nbsp;</h1><p> DSA Problem Solved </p></div>
      <div className={styles.box1}><h1> 150+ &nbsp;</h1><p> Classes as a Technical Trainer </p></div>
    </div>


        </div>


       </section>
       </div>
    )
};


