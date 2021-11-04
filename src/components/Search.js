import React, { Component } from "react"
import { Index } from "elasticlunr"
import { Link } from "gatsby"
import styled from "styled-components"
const SearchWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(15, 15, 15, 0.8);
  z-index: 999999;
  a {
    color: inherit;
    text-decoration: none;
  }
  &.inactive {
    display: none;
    z-index: -2;
    pointer-events: none;
  }
`

const SearchContainer = styled.div`
  overflow-y: scroll;
  max-height: 80vh;
`

const SearchWrapperContents = styled.div`
  position: relative;
  z-index: 1;
  box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px,
    rgba(15, 15, 15, 0.1) 0px 5px 10px, rgba(15, 15, 15, 0.2) 0px 15px 40px;
  border-radius: 3px;
  background: white;
  top: 90px;
  overflow: hidden;
  width: 75%;
  max-width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 90%;
  }
  min-height: 50px;
  max-height: 80vh;
  margin-left: auto;
  margin-right: auto;
`

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: none;
  padding: 0px 16px;
  width: 100%;
  background: transparent;
  font-size: 18px;
  line-height: inherit;
  height: 52px;
  flex-grow: 0;
  flex-shrink: 0;
  z-index: 1;
  box-shadow: rgba(55, 53, 47, 0.09) 0px 1px 0px;
  input {
    width: 100%;
    border: none;
    background: transparent;
    &:focus {
      outline: none;
    }
  }
`

const SearchResultParentWrapper = styled.div`
  user-select: none;
  transition: none 0s ease 0s;
  cursor: ${props => (props.NoHover ? "" : "pointer")}
  width: 100%;
  &:hover {
    background-color: ${props => (props.NoHover ? "" : "#efefef")}
  }
  &.active {
    display: block;
  }
  &.inactive {
    display: none;
  }
`

const SearchResultParent = styled.div`
  display: flex;
  align-items: center;
  line-height: 120%;
  width: 100%;
  user-select: none;
  min-height: 36px;
  font-size: 14px;
  padding-top: 8px;
  padding-bottom: 8px;
`
const SearchSvgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 14px;
  margin-top: 1px;
  align-self: flex-start;
`

const SearchTitleWrapper = styled.div`
  margin-left: 8px;
  margin-right: 14px;
  min-width: 0px;
`
const SearchPageElem = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
`
const SearchPageCategory = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(55, 53, 47, 0.6);
  margin-top: 1px;
  font-size: 12px;
`

// Search component
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
      notFound: false,
    }
  }

  closeSearchBar = () => {
    this.props.closeSearchBar()
    this.setState({
      query: ``,
      results: [],
      notFound: false,
    })
  }

  escFunction = e => {
    if (e.keyCode === 27) {
      this.closeSearchBar()
    }
  }

  componentWillMount() {
    if (typeof document !== `undefined`) {
      document.addEventListener("mousedown", this.handleClick, false)
      document.addEventListener("keydown", this.escFunction, false)
    }
  }

  componentWillUnmount() {
    if (typeof document !== `undefined`) {
      document.removeEventListener("mousedown", this.handleClick, false)
      document.removeEventListener("keydown", this.escFunction, false)
    }
  }

  handleClick = e => {
    if (this.node.contains(e.target)) {
      return
    }
    this.closeSearchBar()
  }

  render() {
    const checkResults = () => {
      this.setState({
        notFound: true,
      })
      if (this.state.results.length > 0) {
        this.setState({
          notFound: false,
        })
      }
    }

    const handleKeyDown = () => {
      checkResults()
    }

    return (
      <SearchWrapper
        className={this.props.searchActive ? "active" : "inactive"}
      >
        <SearchWrapperContents
          ref={node => (this.node = node)}
          className="search--wrapper"
        >
          <InputWrapper>
            <svg viewBox="0 0 17 17" className="searchNew">
              <path d="M6.78027 13.6729C8.24805 13.6729 9.60156 13.1982 10.709 12.4072L14.875 16.5732C15.0684 16.7666 15.3232 16.8633 15.5957 16.8633C16.167 16.8633 16.5713 16.4238 16.5713 15.8613C16.5713 15.5977 16.4834 15.3516 16.29 15.1582L12.1504 11.0098C13.0205 9.86719 13.5391 8.45215 13.5391 6.91406C13.5391 3.19629 10.498 0.155273 6.78027 0.155273C3.0625 0.155273 0.0214844 3.19629 0.0214844 6.91406C0.0214844 10.6318 3.0625 13.6729 6.78027 13.6729ZM6.78027 12.2139C3.87988 12.2139 1.48047 9.81445 1.48047 6.91406C1.48047 4.01367 3.87988 1.61426 6.78027 1.61426C9.68066 1.61426 12.0801 4.01367 12.0801 6.91406C12.0801 9.81445 9.68066 12.2139 6.78027 12.2139Z"></path>
            </svg>
            <input
              type="text"
              value={this.state.query}
              onChange={this.search}
              onKeyUp={handleKeyDown}
            />
          </InputWrapper>
          <SearchContainer>
            <SearchResultParentWrapper
              NoHover
              className={this.state.notFound ? "active" : "inactive"}
            >
              <SearchResultParent>
                <SearchSvgWrapper>
                  <svg viewBox="0 0 30 30" className="page">
                    <g>
                      <path d="M16,1H4v28h22V11L16,1z M16,3.828L23.172,11H16V3.828z M24,27H6V3h8v10h10V27z M8,17h14v-2H8V17z M8,21h14v-2H8V21z M8,25h14v-2H8V25z"></path>{" "}
                    </g>
                  </svg>
                  <SearchTitleWrapper>
                    <SearchPageElem className="search-page--elem">
                      Oops, no results found...
                    </SearchPageElem>
                    <SearchPageCategory className="search-page--cat">
                      Try searching something else.
                    </SearchPageCategory>
                  </SearchTitleWrapper>
                </SearchSvgWrapper>
              </SearchResultParent>
            </SearchResultParentWrapper>
            {this.state.results.map((page, index) => (
              <Link to={"/" + page.slug}>
                <SearchResultParentWrapper
                  key={index}
                  onClick={this.props.closeModal}
                  className="search-result--parent--wrapper"
                >
                  <SearchResultParent>
                    <SearchSvgWrapper>
                      <svg viewBox="0 0 30 30" className="page">
                        <g>
                          <path d="M16,1H4v28h22V11L16,1z M16,3.828L23.172,11H16V3.828z M24,27H6V3h8v10h10V27z M8,17h14v-2H8V17z M8,21h14v-2H8V21z M8,25h14v-2H8V25z"></path>{" "}
                        </g>
                      </svg>
                      <SearchTitleWrapper>
                        <SearchPageElem className="search-page--elem">
                          {page.title}
                        </SearchPageElem>
                        <SearchPageCategory className="search-page--cat">
                          {" " + page.tags.join(`,`)}
                        </SearchPageCategory>
                      </SearchTitleWrapper>
                    </SearchSvgWrapper>
                  </SearchResultParent>
                </SearchResultParentWrapper>
              </Link>
            ))}
          </SearchContainer>
        </SearchWrapperContents>
      </SearchWrapper>
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, {})
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}
