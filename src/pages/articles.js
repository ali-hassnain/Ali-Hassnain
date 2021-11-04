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
`
const ArticleLoopWrapper = styled.div`
  max-width: 602px;
  margin-left: 0;
  margin-right: auto;
  margin-top: 2.5rem;
`

class Portfolio extends React.Component {
  render() {
    const { data } = this.props
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
          title="Portfolio"
          description="This is what I do 9 to 5 (or 10 to 6)"
        />
        <PagesWrapper className="pages--wrapper">
          <h1>
            Joy{" "}
            <span role="img" aria-label="celebrate">
              💅
            </span>
          </h1>
          <p>
            I use this space to write about life, and more. Feel free to look
            around! And thank you for staying by 🙏
          </p>
          <ArticleLoopWrapper>
            <h2 className="h4">Articles</h2>
            <hr />
            <ListLoop>
              {" "}
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

export default Portfolio

export const HomepageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            date(formatString: "MM Do YYYY")
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
