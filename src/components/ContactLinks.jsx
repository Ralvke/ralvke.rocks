import React from "react"
import styled from "astroturf"
import {string, bool} from "prop-types"

import IconLink from "components/IconLink"
import CvIcon from "static/icons/cv.svg"
import GitHubIcon from "static/icons/github.svg"
import TelegramIcon from "static/icons/telegram.svg"
import TwitterIcon from "static/icons/twitter.svg"
import EmailIcon from "static/icons/email.svg"

const cvLink = {icon: <CvIcon />, to: "/cv"}
const links = [
  {icon: <GitHubIcon />, to: "https://github.com/ralvke"},
  {icon: <TelegramIcon />, to: "https://t.me/ralvke"},
  {icon: <TwitterIcon />, to: "https://twitter.com/ralvke"},
  {icon: <EmailIcon />, to: "mailto:ralvke@gmail.com"}
]

const Links = styled("div")`
  display: flex;

  > * {
    margin: 0 12px;
  }
`

const ContactLinks = ({className, withCv}) => {
  const filtered = withCv ? [cvLink].concat(links) : links

  return (
    <Links className={className}>
      {filtered.map(link => <IconLink to={link.to} key={link.to}>{link.icon}</IconLink>)}
    </Links>
  )
}

ContactLinks.propTypes = {
  className: string,
  withCv: bool
}

ContactLinks.defaultProps = {
  className: "",
  withCv: false
}

export default ContactLinks
