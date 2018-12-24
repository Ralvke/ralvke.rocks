import React from "react"
import styled, {css} from "astroturf"

import ContactLinks from "components/ContactLinks"

const styles = css`
  .links {
    margin-top: 16px;
  }
`

const Container = styled("div")`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const HomePage = () => (
  <Container>
    <h1>Max Eliseev</h1>
    <ContactLinks withCv className={styles.links} />
  </Container>
)

export default HomePage
