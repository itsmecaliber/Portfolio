import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css";

const About = () => {
  return <section className={styles.container} id ="about">
    <h2 className={styles.title}>About</h2>
  <div className={styles.content}>
    <img src={getImageUrl("about/jeet.png")}
    alt = "Me sitting with a laptop"
    className={styles.aboutImage}
  />
  <ul className={styles.aboutItems}>
    <li className={styles.aboutItem}>
        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
    <div className={styles.aboutItemText}>
        <h3>Frontend Developer</h3>
        <p>Im a frontend developer with experience in building responsive and optimised sites</p>
    </div>
    </li>
    <li className={styles.aboutItem}>
        <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
    <div className={styles.aboutItemText}>
        <h3>Backend Developer</h3>
        <p>I have  experience developing fast and optimised back-end systems and APIs</p>
    </div>
    </li>
  </ul>
  </div>
  
  </section>
}

export default About
