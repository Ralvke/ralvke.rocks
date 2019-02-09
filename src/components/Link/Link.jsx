import React from "react"
import {Link as GatsbyLink} from "gatsby"
import {
  element,
  string,
  arrayOf,
  oneOfType
} from "prop-types"

const Link = ({to, children, ...props}) => {
  const isInternal = /^\/(?!\/)/.test(to)

  if (isInternal) {
    return <GatsbyLink to={to} {...props}>{children}</GatsbyLink>
  }

  return <a href={to} {...props}>{children}</a>
}

Link.propTypes = {
  to: string.isRequired,
  children: oneOfType([string, element, arrayOf(element)]).isRequired
}

export default Link
