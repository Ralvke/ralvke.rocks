import {h} from "hyperapp"
import Accent from "components/Accent"
import {block} from "../styles.sss"

const Bio = () => (
  <div class={block}>
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
)

export default Bio
