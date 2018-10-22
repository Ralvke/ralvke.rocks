import {element} from "prop-types"
import styled from "astroturf"

const Layout = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

Layout.propTypes = {
  children: element.isRequired
}

export default Layout
