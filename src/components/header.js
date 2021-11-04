import PropTypes from "prop-types"
import React, { Component } from "react"
import Topbar from "./Topbar"
import { GlobalHeader, FlexContainer } from "./HeaderComponents"

class Header extends Component {
  render() {
    return (
      <>
        <FlexContainer>
          <GlobalHeader className="global--header">
            <Topbar handle={this.props.handle} />
          </GlobalHeader>
        </FlexContainer>
      </>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
