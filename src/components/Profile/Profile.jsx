import React from "react";
import styles from "../Profile/Profile.module.css";
import { getImageUrl } from "../../utils";
// import Carousel from "react-elastic-carousel";

import Slider from "react-slick";

export const Profile = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


    
    return( <section className={styles.container}id="profile">
        <h1  className={styles.title11}> About </h1>
        <br />
        
        <p className={styles.aboutText} > Entry-level Software developer with a strong foundation in development, feature engineering, and model
 Evaluation. Proficient in Python, java and data visualization libraries, utilizing artificial learning algorithms to solve 
 real- world problems and I want to explore more and open to relocate on a global level.
 </p>

 <br />
 <br />
 <div  className={styles.carousel}>
 
 {/* work after publish */}
     
    <Slider {...settings}>

    <div className={styles.aboutText}>
        <h3 >2017</h3>
        <br />
       <p1 className={styles.para}>Started my career in Computer Science</p1>
    </div>

    <div className={styles.aboutText}>
    <h3>2018</h3>
        <br />
       <p1  className={styles.para}>Started my journey in Development </p1>
    </div>

    <div className={styles.aboutText}>
    <h3>2019</h3>
        <br />
       <p1  className={styles.para}>Completed many projects and internships </p1>
    </div>

    <div className={styles.aboutText}>
    <h3>2020</h3>
        <br />
       <p1  className={styles.para}> Working as a Intern at Wayezi</p1>
    </div>
    <div className={styles.aboutText}>
    <h3>2021</h3>
        <br />
       <p1  className={styles.para}> Working as a Core team devloper at Wayezi</p1>
    </div>
    <div className={styles.aboutText}>
    <h3>2022</h3>
        <br />
       <p1  className={styles.para}>Working as a AI intern at widhya</p1>
    </div>
    <div className={styles.aboutText}>
    <h3>2023</h3>
        <br />
       <p1  className={styles.para}>Started explore more ...</p1>
    </div>
    </Slider>
    <br/><br/><br/>
    
    



 </div>


    </section>

    );
};


