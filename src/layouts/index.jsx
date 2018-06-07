import React from "react"
import PropTypes from "prop-types"

import {container, page} from "./styles.module.css"

const Layout = ({children}) => (
  <div className={container}>
    <div className={page}>{children()}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func
}

Layout.defaultProps = {
  children: () => null
}

export default Layout
