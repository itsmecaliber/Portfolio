import React from 'react'
import styles from "./Contact.module.css";
import { getImageUrl } from '../../utils'

const Contact = () => {
  return (
    <footer id = "contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to react out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl ("contact/emailIcon.png")} alt="Email icon" />
                <a href="mailto:7488180857jeet@gmail.com">7488180857jeet@gmail.com</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl ("contact/linkedinIcon.png")} alt="LinkedIn icon" />
                <a href="https://www.linkedin.com/in/jeet-chatterjee">linkedin.com/in/jeet-chatterjee</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl ("contact/githubIcon.png")} alt="Github icon" />
                <a href="https://www.github.com/itsmecaliber">github.com/itsmecaliber</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
