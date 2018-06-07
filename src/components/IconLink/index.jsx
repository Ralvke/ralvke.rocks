import React from "react"
import PropTypes from "prop-types"
import cn from "classnames"

import Link from "./Link"
import styles from "./styles.module.css"

const IconLink = ({icon, to}) => (
  <Link to={to} className={cn(styles.container)}>
    <span className={`icon-${icon} ${styles.icon}`} />
  </Link>
)

IconLink.propTypes = {
  icon: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}

export default IconLink
