import React from 'react'
import projects from "../../data/projects.json";
import { getImageUrl } from '../../utils';
import styles from "./Projects.module.css";

const Project = () => {
  return (
  <section className= {styles.container} id="projects">
    <h2 className={styles.title}>Projects</h2>
    <div className={styles.projects}>
        {
            projects.map((project, id) => {
                return <div className={styles.contain} key = {id}>
                    <img src={getImageUrl (project.imageSrc)} alt={`Image of ${project.title}`} className={styles.image} />
                <h3 className={styles.tit}>{project.title}</h3>
                <p className={styles.des}>{project.description}</p>
                <ul className={styles.skis}>
                    {
                        project.skills.map((skill, id) => {
                            return(
                            <li key={id} className={styles.ski}>{skill}</li>)
                        })
                    }
                </ul>
                <div className={styles.links}>
                    <a href={project.source} className={styles.link}>Source</a>
                </div>
             </div>
            })
        }
    </div>
  </section>
  )
}


export default Project
