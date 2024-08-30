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

class IndexPage extends React.Component {
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
        <SEO title="Home" />
        <PagesWrapper className="pages--wrapper">
          <h1>
            Hi There!{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
          </h1>
          <p>My name is Ali Hassnain, and this is my blog!</p>
          <p>
            I’m a Senior Software Engineer in Dubai, turning ideas into high-performance web applications. 
              From building a consumer app from scratch at Swoop Cart Technologies to enhancing multi-tenant CRM platforms at Dubizzle, 
              I thrive on crafting seamless user experiences. 👋
          </p>
          <p>
            My toolkit? 💃🏻
          </p>
          <p>
           JavaScript, TypeScript, ReactJS, NextJS, Apollo Client, and GraphQL, paired with a knack for problem-solving in fast-paced, startup settings.
            <span className="emoji" role="img" aria-label="wave">
              🙏
            </span>
          </p>
          <p>
             I collaborate closely making every project a blend of technical excellence and creativity.
            <span className="emoji" role="img" aria-label="dance">
              👀
            </span>
          </p>
            <ArticleLoopWrapper>
            <h2 className="h4">Professional Experience</h2>
            <hr />
            <ListLoop>
             <a
                href="https://www.swoopcart.com/en_AE"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <ListItemElement externalLink title="Swoop" />
              </a>
              <p>
                <strong>Problem:</strong> People are unable to rent their
                products safely.
                <br />
                <strong>Solution:</strong> People can upload images and details
                of their products using multi-step form and can rent out their
                products.
                <br />
                <strong>Stack:</strong> Typescript, NextJS, Apollo CLient, GraphQL, MongoDB and Node.js
                <br />
                <strong>Experience:</strong> July 2023 - Present
              </p>
              <a
                href="https://www.linkedin.com/company/dubizzle-group/posts/?feedView=all"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <ListItemElement
                  externalLink
                  title="Dubizzle"
                />
              </a>
              <p>
                <strong>Problem:</strong> CRM for the Dubizzle business in the UAE
                <br />
                <strong>Solution:</strong> A web application for the management to
                keep a track for their business.
                <br /> <strong>Stack:</strong> Javascript, ReactJS
                <br />
                <strong>Experience:</strong> Jan 2021 - July 2023
              </p>
            </ListLoop>
          </ArticleLoopWrapper>
          <ArticleLoopWrapper>
            <h2 className="h4">Portfolio</h2>
            <hr />
            <ListLoop>
              <a
                href="https://github.com/ali-hassnain/Todo-mobile-application-React-Native-First-project"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <ListItemElement
                  externalLink
                  title="To Do Mobile application"
                />
              </a>
              <p>
                <strong>Problem:</strong> People tend to forget what they plan
                to do.
                <br />
                <strong>Solution:</strong> A mobile application for users to
                keep a reminder for their tasks.
                <br /> <strong>Stack:</strong> Javascript, React-Native
                <br />{" "}
              </p>
              <a
                href="https://github.com/ali-hassnain/Dev-and-Design-Forum"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <ListItemElement externalLink title="Dev and Design Forum" />
              </a>
              <p>
                <strong>Problem:</strong> Designers and developers of Pakistan
                are not connected.
                <br />
                <strong>Solution:</strong> A community where designers and
                developers can share their thoughts and get in touch.
                <br /> <strong>Stack:</strong> TypeScript, React (Next.js),
                Tailwind, Node.js, Strapi
                <br />{" "}
              </p>
              <a
                href="https://github.com/ali-hassnain/florabymeens"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <ListItemElement externalLink title="Flora by Meens" />
              </a>
              <p>
                <strong>Problem:</strong> People are unable to send flowers to
                their loved ones.
                <br />
                <strong>Solution:</strong> An ecommerce platform where people
                can add to cart their customised gifts and flowers with online
                payment features.
                <br />
                <strong>Stack:</strong> Javascript, React (Next.js), Tailwind,
                WooCommerce, Wordpress
                <br />
              </p>
            </ListLoop>
          </ArticleLoopWrapper> 
        </PagesWrapper>
      </PageWrapperLayout>
    )
  }
}

export default IndexPage

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
