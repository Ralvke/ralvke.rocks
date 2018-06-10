import {h} from "hyperapp"
import Accent from "components/Accent"
import {block} from "../styles.sss"

const Skills = () => (
  <div class={block}>
    <h3>Skills</h3>
    <ul>
      <li>
        Frontend
        <ul>
          <li>JS <Accent>[ES6+, Babel, ESLint, Webpack]</Accent></li>
          <li>React <Accent>[ReactRouter, Redux, MobX, MST]</Accent></li>
          <li>CSS <Accent>[Modules, PostCSS]</Accent></li>
        </ul>
      </li>
      <li>
        Backend
        <ul>
          <li>Rust <Accent>[Futures, Tokio, Actix, Rocket]</Accent></li>
          <li>Node <Accent>[Express, Koa, Apollo]</Accent></li>
          <li>Database <Accent>[Postgres, Redis, MongoDB]</Accent></li>
          <li>System <Accent>[Linux, Nginx, Docker]</Accent></li>
        </ul>
      </li>
    </ul>
  </div>
)

export default Skills
