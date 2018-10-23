import styled from "astroturf"

const h1 = styled("h1")`
  font-size: 1.6rem;
`

const h2 = styled("h2")`
  font-size: 1.4rem;
`

const h3 = styled("h2")`
  font-size: 1.2rem;
  margin: 2.2rem 0 1rem;
`

const em = styled("span")`
  color: var(--accent-color);
`

const ul = styled("ul")`
  list-style-type: square;

  p {
    margin: 6px 0;
  }
`

const components = {h1, h2, h3, em, ul}

export default components
