import React from "react"
import {css} from "astroturf"
import {Link} from "react-router-dom"
import {string, element} from "prop-types"

const styles = css`
  .link {
    outline: none;

    svg {
      width: 48px;
      fill: var(--text-gray-color);
      transition: fill .3s ease-out;
    }

    &:hover svg {
      fill: var(--text-color);
    }
  }
`

const IconLink = ({to, children}) => {
  const isInternal = /^\/(?!\/)/.test(to)

  if (isInternal) {
    return <Link to={to} className={styles.link}>{children}</Link>
  }

  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
    >{children}
    </a>
  )
}

IconLink.propTypes = {
  to: string.isRequired,
  children: element.isRequired
}

export default IconLink
