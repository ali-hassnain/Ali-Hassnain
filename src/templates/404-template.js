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
const Span = styled.span`
  color: #dd4a68;
`

class BadRoute extends React.Component {
  render() {
    const { data } = this.props
    return (
      <PageWrapperLayout imageSource={data.file.childImageSharp.fluid}>
        <SEO
          title="404. Not Found"
          description="Oops, you just hit a bad route"
        />
        <PagesWrapper className="pages--wrapper">
          <h1>
            <Span>404.</Span> Not Found.{" "}
            <span role="img" aria-label="wave">
              😱
            </span>
          </h1>
        </PagesWrapper>
      </PageWrapperLayout>
    )
  }
}

export default BadRoute

export const NotFoundQuery = graphql`
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
