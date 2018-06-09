import {h, app} from "hyperapp"
import "styles/main.sss"

import Link from "components/Link"

const App = () => (
  <div>
    <Link />
  </div>
)

app({}, {}, App, document.getElementById("wrap"))
