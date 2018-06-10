import {h} from "hyperapp"
import {container} from "./styles.sss"

const IconLink = ({className, icon, to}) => (
  <a
    href={to}
    target="_blank"
    rel="noreferrer noopener"
    class={`${container} ${className}`}
  >
    <span class={`icon-${icon}`} />
  </a>
)

export default IconLink
