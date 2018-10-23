import React, {StrictMode} from "react"
import {render} from "react-dom"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import HomePage from "pages/Home"
import CvPage from "pages/Cv"

const Wrap = () => (
  <StrictMode>
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cv" component={CvPage} />
      </Switch>
    </Router>
  </StrictMode>
)

render(<Wrap />, document.getElementById("wrap"))

if (module.hot) module.hot.accept()
