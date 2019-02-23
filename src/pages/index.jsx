import React from "react"
import {Helmet} from "react-helmet"

import {links, cvLink} from "../links"
import LinkList from "../components/LinkList"
import {withLayout} from "../components/Layout"
import {container, links as linksClassName} from "./index.module.css"

const indexLinks = [cvLink].concat(links)

const Index = () => (
  <div className={container}>
    <Helmet title="Max Eliseev" />
    <h1>Max Eliseev</h1>
    <LinkList links={indexLinks} className={linksClassName} />
    <p>
      <a href="pubkey.txt">F2B4 7838 414D 672A A95D 9F5F 17B0 FDF4 5DE0 8DDB</a>
    </p>
  </div>
)

export default withLayout(Index)
