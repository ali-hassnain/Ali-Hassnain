import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.scss"
import { graphql, StaticQuery } from "gatsby"
import Search from "./Search"

// Components
import Header from "./header"
import Footer from "./Footer"
import DrawerContents from "./DrawerContents"

const Main = styled.main`
  padding-top: 56px;
  @media (min-width: 992px) {
    display: flex;
    padding-top: 0;
  }
`
const FrameWrapper = styled.div`
  @media (min-width: 992px) {
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
  }
`

class Layout extends React.Component {
  state = {
    navToggled: "inactive",
    searchActive: false,
  }

  handleDrawerToggle = () => {
    if (this.state.navToggled === "inactive") {
      this.setState({
        navToggled: "active",
      })
    } else {
      this.setState({
        navToggled: "inactive",
      })
    }
  }

  handleSearchModal = () => {
    if (!this.state.searchActive) {
      this.setState({
        searchActive: true,
      })
    }
  }

  closeDrawer = () => {
    this.setState({
      navToggled: "inactive",
    })
  }

  handleClickOutside = () => {
    if (this.state.searchActive) {
      this.setState({
        searchActive: false,
      })
    }
    this.setState({
      navToggled: "inactive",
    })
  }

  closeSearchBar = () => {
    if (this.state.searchActive) {
      this.setState({
        searchActive: false,
      })
    }
  }

  render() {
    const { children } = this.props
    return (
      <>
        <Main>
          <DrawerContents
            hamBurgerState={this.state.navToggled}
            closeDrawer={this.closeDrawer}
            handleDrawer={this.handleDrawerToggle}
            searchHandle={this.handleSearchModal}
          />
          <StaticQuery
            query={graphql`
              query SearchIndexQuery {
                siteSearchIndex {
                  index
                }
              }
            `}
            render={data => {
              return (
                <Search
                  searchActive={this.state.searchActive}
                  searchIndex={data.siteSearchIndex.index}
                  closeModal={this.handleClickOutside}
                  closeSearchBar={this.closeSearchBar}
                />
              )
            }}
          />
          <FrameWrapper id="frame-wrapper">
            <Header handle={this.handleDrawerToggle} />
            {children}
            <Footer />
          </FrameWrapper>
        </Main>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
