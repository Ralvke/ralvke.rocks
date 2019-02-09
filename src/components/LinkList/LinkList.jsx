import React from "react"
import {
  arrayOf,
  shape,
  string,
  func
} from "prop-types"

import IconLink from "../IconLink"
import {link as linkClassName} from "./LinkList.module.css"

const LinkList = ({className, links}) => (
  <div className={className}>
    {links.map(link => (
      <IconLink className={linkClassName} key={link.to} {...link} />
    ))}
  </div>
)

LinkList.propTypes = {
  className: string,
  links: arrayOf(shape({
    to: string.isRequired,
    icon: func.isRequired
  }))
}

LinkList.defaultProps = {
  className: "",
  links: []
}

export default LinkList
