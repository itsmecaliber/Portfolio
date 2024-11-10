import React from 'react'
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils'

const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>Hi, I'm Jeet</h1>
    <p className={styles.description}>I'm a full stack developer and have experience using React and Spring Boot. Reach out if you'd like my work 
    </p>
    <a href="mailto:7488180857jeet@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg} />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
  </section>
}

export default Hero
