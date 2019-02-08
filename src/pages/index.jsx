import React from "react"
import {Helmet} from "react-helmet"

import Center from "../components/Center"
import {links, cvLink} from "../links"
import LinkList from "../components/LinkList"
import {withLayout} from "../components/Layout"

const indexLinks = [cvLink].concat(links)

const Index = () => (
  <Center>
    <Helmet title="Max Eliseev" />
    <LinkList links={indexLinks} />
  </Center>
)

export default withLayout(Index)
