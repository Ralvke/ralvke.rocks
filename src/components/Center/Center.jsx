import React from "react"
import {element, arrayOf, oneOfType} from "prop-types"

import {container} from "./Center.module.css"

const Center = ({children}) => (
  <div className={container}>{children}</div>
)

Center.propTypes = {
  children: oneOfType([element, arrayOf(element)]).isRequired
}

export default Center
