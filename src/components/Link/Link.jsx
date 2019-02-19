import React from "react"
import {Link as GatsbyLink} from "gatsby"
import {string, node} from "prop-types"

const Link = ({to, children, ...props}) => {
  const isInternal = /^\/(?!\/)/.test(to)

  if (isInternal) {
    return <GatsbyLink to={to} {...props}>{children}</GatsbyLink>
  }

  return <a href={to} {...props}>{children}</a>
}

Link.propTypes = {
  to: string.isRequired,
  children: node.isRequired
}

export default Link
