import {h} from "hyperapp"
import {CvLinks} from "components/Links"
import {container, info, links} from "./styles.sss"

import Header from "./blocks/Header"
import Bio from "./blocks/Bio"
import BaseInfo from "./blocks/BaseInfo"
import Skills from "./blocks/Skills"

const CvPage = () => (
  <div class={container}>
    <div class={info}>
      <Header />
      <Bio />
      <BaseInfo />
      <Skills />
    </div>
    <div class={links}>
      <CvLinks />
    </div>
  </div>
)

export default CvPage
