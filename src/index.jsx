import React, {StrictMode} from "react"
import {render} from "react-dom"

import Layout from "components/Layout"
import HomePage from "pages/Home"

const Wrap = () => (
  <StrictMode>
    <Layout>
      <HomePage />
    </Layout>
  </StrictMode>
)

render(<Wrap />, document.getElementById("wrap"))

if (module.hot) module.hot.accept()
