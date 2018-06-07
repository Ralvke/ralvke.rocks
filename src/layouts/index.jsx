import React from "react"
import PropTypes from "prop-types"

import "modern-normalize/modern-normalize.css"
import "../static/icons/style.css"
import "./styles.module.css"

const Layout = ({children}) => children()

Layout.propTypes = {
  children: PropTypes.func
}

Layout.defaultProps = {
  children: () => null
}

export default Layout
