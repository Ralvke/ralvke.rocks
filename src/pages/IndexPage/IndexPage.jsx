import React from "react"
import {Helmet} from "react-helmet"

import {links, cvLink} from "../../links"
import LinkList from "../../components/LinkList"
import {withLayout} from "../../components/Layout"
import {container, links as linksClassName} from "./IndexPage.module.css"

const indexLinks = [cvLink].concat(links)

const Index = () => (
  <div className={container}>
    <Helmet title="Max Eliseev" />
    <h1>Max Eliseev</h1>
    <LinkList links={indexLinks} className={linksClassName} />
  </div>
)

export default withLayout(Index)
