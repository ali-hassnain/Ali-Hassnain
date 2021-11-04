import React from "react"
import SEO from "../components/seo"
import ListLoop from "../components/ListLoop"
import ListItemElement from "../components/ListItemElement"
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
const ArticleLoopWrapper = styled.div`
  max-width: 602px;
  margin-left: 0;
  margin-right: auto;
  margin-top: 2.5rem;
`

class TagsPage extends React.Component {
  render() {
    const { data, pageContext } = this.props
    let blogPosts = []
    data.allMarkdownRemark.edges.forEach(({ node, index }) => {
      blogPosts.push({
        title: node.frontmatter.title,
        destination: "/" + node.fields.slug,
      })
    })

    return (
      <PageWrapperLayout imageSource={data.file.childImageSharp.fluid}>
        <SEO
          title={pageContext.tag + " | Archives"}
          description={"Archive page for " + pageContext.tag}
        />
        <PagesWrapper className="pages--wrapper">
          <h1>
            {pageContext.tag}{" "}
            <span role="img" aria-label="wave">
              ✍️
            </span>
          </h1>
          <p>Explore the articles below for {pageContext.tag}</p>
          <ArticleLoopWrapper>
            <h2 className="h4">Articles</h2>
            <hr />
            <ListLoop>
              {blogPosts.map((elem, index) => (
                <ListItemElement
                  title={elem.title}
                  destination={elem.destination}
                  key={index}
                  handle={this.scrollTop}
                />
              ))}
            </ListLoop>
          </ArticleLoopWrapper>
        </PagesWrapper>
      </PageWrapperLayout>
    )
  }
}

export default TagsPage

export const tagQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM Do YYYY")
            tags
          }
          fields {
            slug
          }
        }
      }
    }
    file(relativePath: { eq: "hero.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1600, maxHeight: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
