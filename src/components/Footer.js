import React, { Component } from "react"
import styled from "styled-components"
const FooterContents = styled.footer`
  text-align: center;
  padding: 1rem 0;
  p {
    margin-bottom: 0;
    color: #c5c5c5;
    font-size: 0.9rem;
  }
`

export class Footer extends Component {
  render() {
    return (
      <FooterContents>
        <p>© {new Date().getFullYear()} alihassnain.</p>
      </FooterContents>
    )
  }
}

export default Footer
