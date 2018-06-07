import React from "react"
import Helmet from "react-helmet"

import {IndexLinks} from "../components/Links"
import styles from "./styles/index.module.css"

const IndexPage = () => (
  <div className={styles.container}>
    <Helmet title="Maxim Lisw" />

    <h1 className={styles.name}>Maxim Lisw</h1>
    <IndexLinks />
  </div>
)

export default IndexPage
