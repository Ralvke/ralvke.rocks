import {h} from "hyperapp"
import {IndexLinks} from "components/Links"
import {container, title} from "./styles.sss"

const IndexPage = () => (
  <div class={container}>
    <h1 class={title}>Maxim Lisw</h1>
    <IndexLinks />
  </div>
)

export default IndexPage
