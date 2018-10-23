import React from "react"
import styled from "astroturf"

import ContactLinks from "components/ContactLinks"
import Content from "./content.md"
import components from "./components"

const Container = styled("div")`
  width: 620px;
  margin: 48px auto;
  padding: 0 32px;
`

const LinksContainer = styled("div")`
  margin-top: 48px;
  display: flex;
  justify-content: center;
`

const CvPage = () => (
  <Container>
    <Content components={components} />
    <LinksContainer>
      <ContactLinks />
    </LinksContainer>
  </Container>
)

export default CvPage
