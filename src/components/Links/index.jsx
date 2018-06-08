import React from "react"
import PropTypes from "prop-types"

import IconLink from "../IconLink"
import styles from "./styles.module.css"

const Links = ({links}) => (
  <div className={styles.container}>
    {links.map(link => <IconLink key={link.to} {...link} />)}
  </div>
)
Links.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      to: PropTypes.string
    })
  ).isRequired
}

const cvLinks = [
  {icon: "github", to: "https://github.com/Ralvke"},
  {icon: "telegram", to: "https://t.me/ralvke"},
  {icon: "envelop", to: "mailto:ralvke@gmail.com"}
]
const indexLinks = [
  {icon: "profile", to: "/cv"},
  ...cvLinks,
  {icon: "twitter", to: "https://twitter.com/ralvke"}
]

const IndexLinks = () => <Links links={indexLinks} />

const CvLinks = () => <Links links={cvLinks} />

export {IndexLinks, CvLinks}
export default Links
