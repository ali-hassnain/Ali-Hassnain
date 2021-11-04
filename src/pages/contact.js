import React from "react"
import SEO from "../components/seo"
import PageWrapperLayout from "../components/PageWrapperLayout"
import styled from "styled-components"
import { graphql } from "gatsby"
const PagesWrapper = styled.div`
  color: rgba(55, 53, 47, 0.6);
  .emoji {
    color: #000;
  }
  @media (max-width: 992px) {
    min-height: 70vh;
  }
`
const Anchor = styled.a`
  color: #dd4a68;
  font-weight: bold;
  &:hover {
    color: #dd4a68;
  }
`

class Contact extends React.Component {
  render() {
    const { data } = this.props
    return (
      <PageWrapperLayout imageSource={data.file.childImageSharp.fluid}>
        <SEO title="Contact" description="Yippee, let's get in touch!" />
        <PagesWrapper className="pages--wrapper">
          <h1>
            Yay!{" "}
            <span role="img" aria-label="hug">
              🤗
            </span>
          </h1>
          <p>
            Please feel free to write me an{" "}
            <Anchor href="mailto:alihassnain5@gmail.com">
              email: alihassnain5@gmail.com
            </Anchor>{" "}
            until I get some time to program a form.
          </p>
          <p>
            I am usually pretty fast in responding, but sometimes life can
            happen.{" "}
            <span className="emoji" role="img" aria-label="heart">
              ❤️
            </span>
          </p>
        </PagesWrapper>
      </PageWrapperLayout>
    )
  }
}

export default Contact

export const productsQuery = graphql`
  query {
    file(relativePath: { eq: "hero.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1600, maxHeight: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
