import React from "react"
import {Helmet} from "react-helmet"

import Content from "./content.mdx"
import {content, links as linksClassName} from "./Cv.module.css"
import {links} from "../../links"
import LinkList from "../../components/LinkList"
import {withLayout} from "../../components/Layout"

const Cv = () => (
  <>
    <Helmet title="Max Eliseev CV" />
    <div className={content}>
      <Content />
    </div>
    <LinkList className={linksClassName} links={links} />
  </>
)

export default withLayout(Cv)
