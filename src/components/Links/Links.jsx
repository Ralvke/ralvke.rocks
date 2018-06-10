import {h} from "hyperapp"
import IconLink from "components/IconLink"
import {container, icon} from "./styles.sss"

const Links = ({links}) => (
  <div class={container}>
    {links.map(link => (
      <IconLink key={link.to} className={icon} {...link} />
    ))}
  </div>
)

const cvLinks = [
  {icon: "github", to: "https://github.com/Ralvke"},
  {icon: "telegram", to: "https://t.me/ralvke"},
  {icon: "envelop", to: "mailto:ralvke@gmail.com"}
]

const indexLinks = [
  {icon: "profile", to: "https://cv.ralvke.rocks"},
  ...cvLinks,
  {icon: "twitter", to: "https://twitter.com/ralvke"}
]

const CvLinks = () => <Links links={cvLinks} />
const IndexLinks = () => <Links links={indexLinks} />

export default Links
export {CvLinks, IndexLinks}
