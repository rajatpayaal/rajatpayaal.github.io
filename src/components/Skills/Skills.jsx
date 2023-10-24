import React from "react";

import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import styles from "../Skills/Skills.module.css"


export const Skills = () => {
    return(
    <section className={styles.container} id="Skills">
    <h2 className={styles.title}> Skills </h2>
      <div><br></br></div>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (

              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                 <h1 className={styles.title2}>{skill.title} &nbsp; </h1> <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                {/* <p>{skill.title} &nbsp; </p> */}
                <p className={styles.title3}>{skill.component1}</p>
                <p className={styles.title3}>{skill.component2}</p>
                <p className={styles.title3}>{skill.component3}</p>
                <p className={styles.title3}>{skill.component4}</p>
                
              </div>
            );
          })}</div>
        </div>
    </section>
  );
};