import React from "react"
import {
  arrayOf,
  shape,
  string,
  func
} from "prop-types"

import IconLink from "../IconLink"
import {link as linkClassName} from "./LinkList.module.css"

const LinkList = ({links}) => (
  <div>
    {links.map(link => (
      <IconLink className={linkClassName} key={link.to} {...link} />
    ))}
  </div>
)

LinkList.propTypes = {
  links: arrayOf(shape({
    to: string.isRequired,
    icon: func.isRequired
  }))
}

LinkList.defaultProps = {
  links: []
}

export default LinkList
