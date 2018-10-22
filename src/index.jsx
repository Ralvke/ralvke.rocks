import React, {StrictMode} from "react"
import {render} from "react-dom"
import styled from "astroturf"

const Title = styled("h1")`
  color: var(--accent-color);
`

const SubTitle = styled("h2")`
  background: var(--background-color);
`

const Wrap = () => (
  <StrictMode>
    <Title>Its works</Title>
    <SubTitle>sub title</SubTitle>
  </StrictMode>
)

render(<Wrap />, document.getElementById("wrap"))

if (module.hot) module.hot.accept()
