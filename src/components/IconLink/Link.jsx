import React from "react"
import PropTypes from "prop-types"
import GatsbyLink from "gatsby-link"

const Link = ({children, to, ...props}) => {
  const isInternal = /^\/(?!\/)/.test(to)

  if (isInternal) {
    return (
      <GatsbyLink to={to} {...props}>
        {children}
      </GatsbyLink>
    )
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={to} {...props}>
      {children}
    </a>
  )
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
}

export default Link
