import React from "react"
import {node} from "prop-types"

import {container} from "./Layout.module.css"

const Layout = ({children}) => (
  <div className={container}>{children}</div>
)

Layout.propTypes = {
  children: node.isRequired
}

const withLayout = Target => props => (
  <Layout>
    <Target {...props} />
  </Layout>
)

export {withLayout}
export default Layout
