import React from "react"
import styled, {css} from "astroturf"

import ContactLinks from "components/ContactLinks"

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled("h1")`
  margin: 0;
`

const styles = css`
  .links {
    margin-top: 32px;
  }
`

const HomePage = () => (
  <Container>
    <Title>Maxim Lisw</Title>
    <h3>Fullstack developer</h3>
    <ContactLinks withCv className={styles.links} />
  </Container>
)

export default HomePage
