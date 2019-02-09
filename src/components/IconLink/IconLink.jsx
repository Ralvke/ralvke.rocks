import React from "react"
import cn from "classnames"
import {string, func} from "prop-types"

import Link from "../Link"
import {container, icon as iconClassName} from "./IconLink.module.css"

const IconLink = ({to, icon, className}) => {
  const Icon = icon

  return (
    <Link className={cn(container, className)} to={to}>
      <Icon className={iconClassName} />
    </Link>
  )
}

IconLink.propTypes = {
  to: string.isRequired,
  icon: func.isRequired,
  className: string
}

IconLink.defaultProps = {
  className: ""
}

export default IconLink
