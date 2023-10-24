import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      {/* POOJECT IMAGE  */}

      {/* work on this after publish  */}
      
      <img
       
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        

        className={styles.image}
      />
      {/* project title */}
      <h3 className={styles.title}>{title}</h3>

      {/* project description */}
      <p className={styles.description}>{description}</p>
      {/* skills use in project  */}
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        {/* <a href={demo} className={styles.link}>
          Demo
        </a> */}
        <a href={source} className={styles.link}>
        <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" 
          class="small-image"/>
        </a>
      </div>
    </div>
  );
};
