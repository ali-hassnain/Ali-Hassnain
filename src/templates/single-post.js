import React, { Component } from "react"
import SEO from "../components/seo"
import PostWrapperLayout from "../components/PostWrapperLayout"
import { graphql } from "gatsby"
import styled from "styled-components"
const Article = styled.article``
const TitleWrapper = styled.header`
  padding: 0.5rem 0 2rem 0;
`
const Date = styled.span`
  color: #dd4a68;
  font-size: 0.9rem;
  font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;
`

const ArticleContent = styled.div`
  line-height: 1.7;
  color: #37352f;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2.5rem;
    margin-bottom: 1.65rem;
  }
  a {
    color: #dd4a68;
    font-weight: 700;
  }
  ul,
  ol {
    li {
      margin-bottom: 0.5rem;
    }
  }
  img {
    margin-top: 1.25rem;
    margin-bottom: 2.5rem;
    border-radius: 12px;
    width: 100%;
  }
  blockquote {
    background-color: #f7f6f3;
    border-radius: 0.3em;
    margin: 2em 0;
    padding: 2em 1.25em;
    overflow: auto;
    font-size: 0.9rem;
    color: #dd4a68;
    font-weight: 500;
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    font-weight: 900;
    font-style: italic;
    font-size: 1.35rem;
    p,
    ul li,
    ol li {
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`

class SinglePost extends Component {
  render() {
    const { data } = this.props
    const post = data.markdownRemark.frontmatter
    let resolutions = ""
    if (post.image !== null) {
      resolutions = post.image.childImageSharp.fluid
    }
    return (
      <PostWrapperLayout imageSource={resolutions}>
        <SEO title={post.metaTitle} description={post.metaDescription} />
        <Article>
          <TitleWrapper>
            <h1>{post.title}</h1>
            <Date>{post.date}</Date>
          </TitleWrapper>
          <ArticleContent
            className="article--content"
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          />
        </Article>
      </PostWrapperLayout>
    )
  }
}

export default SinglePost

export const SinglePostQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        date(formatString: "MMM Do YYYY")
        tags
        metaTitle
        metaDescription
        image {
          childImageSharp {
            fluid(maxWidth: 1600, maxHeight: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
