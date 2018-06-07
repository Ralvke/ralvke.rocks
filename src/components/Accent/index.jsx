import React from "react"
import PropTypes from "prop-types"

import styles from "./styles.module.css"

const Accent = ({children}) => <span className={styles.accent}>{children}</span>

Accent.propTypes = {
  children: PropTypes.string.isRequired
}

export default Accent
