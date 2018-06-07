import React from "react"
import Helmet from "react-helmet"

import Accent from "../components/Accent"
import {CvLinks} from "../components/Links"
import styles from "./styles/cv.module.css"

const CvPage = () => (
  <div className={styles.container}>
    <Helmet title="Maxim Lisw CV" />

    <div className={styles.info}>
      <div className={styles.header}>
        <h2>Maxim Lisw</h2>
        <h3>Full-Stack Developer</h3>
      </div>

      <div className={styles.block}>
        <h3>Bio</h3>
        <p>
          I am Maxim, a Full stack developer. I had experienced high performance
          backend development with <Accent>Rust</Accent> and frontend with
          <Accent> React</Accent>. Also I have some <Accent>UI/UX</Accent> and
          <Accent> DevOps</Accent> skills.
          <br />
          &quot;Lisw&quot; is a pseudonym.
        </p>
      </div>

      <div className={styles.block}>
        <h3>Base info</h3>
        <p>Experience: 3 years</p>
        <p>
          Conditions: 20 hours/week, <Accent> remote</Accent>
        </p>
        <p>
          Location: Russia, Chelyabinsk <Accent> [UTC + 5]</Accent>
        </p>
      </div>

      <div className={styles.block}>
        <h3>Skills</h3>
        <ul>
          <li>
            <h4>Frontend</h4>
            <ul>
              <li>
                JS <Accent>[ES6+, Babel, ESLint, Webpack]</Accent>
              </li>
              <li>
                React <Accent>[ReactRouter, Redux, MobX, MST]</Accent>
              </li>
              <li>
                CSS <Accent>[Modules, PostCSS]</Accent>
              </li>
            </ul>
          </li>
          <li>
            <h4>Backend</h4>
            <ul>
              <li>
                Rust <Accent>[Futures, Tokio, Actix, Rocket]</Accent>
              </li>
              <li>
                Node <Accent>[Express, Koa, Apollo]</Accent>
              </li>
              <li>
                Database <Accent>[Postgres, Redis, MongoDB]</Accent>
              </li>
              <li>
                System <Accent>[Linux, Nginx, Docker]</Accent>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div className={styles.links}>
      <CvLinks />
    </div>
  </div>
)

export default CvPage
