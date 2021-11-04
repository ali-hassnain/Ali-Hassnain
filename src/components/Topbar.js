import React, { Component } from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import {
  FlexWrapper,
  Button,
  Column,
  Span,
  NightTogglerWrapper,
  NightToggler,
  NightTogglerChild,
} from "./HeaderComponents"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

export class Topbar extends Component {
  render() {
    return (
      <Container fluid={true} className={this.props.classList}>
        <FlexWrapper>
          <Column>
            <Button
              type="button"
              role="Open Nav"
              className="hamburger-wrapper"
              onClick={this.props.handle}
            >
              <svg viewBox="0 0 14 14" className="hamburgerMenu">
                <path d="M0,1.25 L14,1.25 L14,2.75 L0,2.75 L0,1.25 Z M0,6.25 L14,6.25 L14,7.75 L0,7.75 L0,6.25 Z M0,11.25 L14,11.25 L14,12.75 L0,12.75 L0,11.25 Z"></path>
              </svg>
            </Button>
            <Link to="/" className="no--browser-colors">
              <Span>
                <span role="img" aria-label="sleeping">
                  😴
                </span>{" "}
                alihassnain
              </Span>
            </Link>
          </Column>
          <NightTogglerWrapper>
            <ThemeToggler>
              {({ theme, toggleTheme }) => {
                const togglerClass = theme === "dark" ? "inactive" : "active"
                return (
                  <NightToggler
                    className={togglerClass}
                    onClick={() => {
                      const nextTheme = theme === "light" ? "dark" : "light"
                      toggleTheme(nextTheme)
                    }}
                  >
                    <NightTogglerChild
                      className={togglerClass}
                    ></NightTogglerChild>
                  </NightToggler>
                )
              }}
            </ThemeToggler>
          </NightTogglerWrapper>
        </FlexWrapper>
      </Container>
    )
  }
}

export default Topbar
