import React from "react"
import {element, arrayOf, oneOfType} from "prop-types"

import {container} from "./Layout.module.css"

const Layout = ({children}) => (
  <div className={container}>{children}</div>
)

Layout.propTypes = {
  children: oneOfType([element, arrayOf(element)]).isRequired
}

const withLayout = Target => props => (
  <Layout>
    <Target {...props} />
  </Layout>
)

export {withLayout}
export default Layout
