import React, { Component } from "react"
import styled from "styled-components"
import FrameWrapperContents from "./FrameWrapperContents"
import "../styles/index.scss"
import Container from "react-bootstrap/Container"
import Img from "gatsby-image"

const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: -1;
  .cover-image {
    width: 100%;
    height: 216px;
    z-index: -1;
    @media (min-width: 992px) {
      height: 300px;
    }
    @media (min-width: 1500px) {
      height: 325px;
    }
    @media (min-width: 1600px) {
      height: 350px;
    }
  }
`

const EmojiWrapper = styled.div`
  margin-top: -2.3rem;
  margin-bottom: 1rem;
  @media (min-width: 992px) {
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 3.6rem;
    padding-right: 3.6rem;
  }
  span {
    font-size: 3.25rem;
    @media (min-width: 992px) {
      font-sizee: 4rem;
    }
  }
`

const ContentWrapper = styled.div`
  padding-bottom: 4rem;
  @media (min-width: 992px) {
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 3.5rem;
    padding-right: 6rem;
    padding-bottom: 30vh;
    min-height: 100vh;
  }
`

const PageWrapper = styled.div``

export class PageWrapperLayout extends Component {
  componentDidMount() {
    const myDiv = document.getElementById("frame-wrapper")
    myDiv.scrollTop = 0
  }
  render() {
    const { children } = this.props
    return (
      <>
        <PageWrapper>
          <ImageWrapper>
            <Img
              className="cover-image"
              fluid={this.props.imageSource}
              alt="Robot"
            />
            <Container>
              <EmojiWrapper>
                <span role="img" aria-label="Sleeping">
                  😴
                </span>
              </EmojiWrapper>
            </Container>
          </ImageWrapper>
          <ContentWrapper>
            <Container>
              <FrameWrapperContents>{children}</FrameWrapperContents>
            </Container>
          </ContentWrapper>
        </PageWrapper>
      </>
    )
  }
}

export default PageWrapperLayout
