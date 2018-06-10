import {h} from "hyperapp"
import Accent from "components/Accent"
import {block} from "../styles.sss"

const BaseInfo = () => (
  <div class={block}>
    <h3>Base info</h3>
    <p>Experience: 3 years</p>
    <p>Conditions: 20 hours/week, <Accent> remote</Accent></p>
    <p>Location: Russia, Chelyabinsk <Accent> [UTC + 5]</Accent></p>
  </div>
)

export default BaseInfo
