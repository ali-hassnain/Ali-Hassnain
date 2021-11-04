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
            I am a self taught Frontend developer. I used to work in customer
            development, now I work in web development. Pretty much the same.🤗
          </p>
          <p>
            I entered this field because it gives me a feeling of satisfaction
            when I create something. Something which I can own. Something which
            I gave birth to. It's incredible. 💃🏻
          </p>
          <p>
            This is what I have been doing every single day since I left my job.
            My portfolio consists of the products that I have created while
            learning to practice whatever I learn.
            <span className="emoji" role="img" aria-label="wave">
              🙏
            </span>
          </p>
          <p>
            Some are good, some could be better - but we learn by doing.{" "}
            <span className="emoji" role="img" aria-label="dance">
              👀
            </span>
          </p>

          <ArticleLoopWrapper>
            <h2 className="h4">Portfolio</h2>
            <hr />
            <ListLoop>
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
              <a
                href="https://github.com/ali-hassnain/swoop"
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
                <strong>Stack:</strong> Javascript, React (Create React App),
                Node.js, Strapi
                <br />{" "}
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
