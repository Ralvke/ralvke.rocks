import {app} from "hyperapp"

import picoRouter from "etc/picoRouter"
import IndexPage from "pages/Index"
import CvPage from "pages/CV"
import NotFound from "pages/NotFound"

import "static/icons/style.css"
import "styles/main.sss"

const routes = {
  "/": IndexPage,
  "/cv": CvPage
}

const route = picoRouter(routes, NotFound)

app({}, {}, route, document.getElementById("wrap"))
