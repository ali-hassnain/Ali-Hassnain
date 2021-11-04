import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
const ListParent = styled.div`
  transition: 0.1s ease;
  &:hover {
    background-color: rgba(55, 53, 47, 0.08);
    transition: 0.1s ease;
  }
  a {
    text-decoration: none;
  }
`

const ListItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const ListIconWrap = styled.div`
  margin-right: 4px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 0;
  flex-shrink: 0;
  min-height: calc(1.5em + 3px + 3px);
  svg {
    fill: rgba(55, 53, 47, 0.8);
    width: 20px;
    height: 20px;
  }
`
const ListTextWrap = styled.div`
  flex: 1 1 0px;
  min-width: 1px;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 2px;
`

const ListTextParent = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  a {
    text-decoration: none;
    color: inherit;
  }
`
const ListText = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  line-height: 1.3;
  border-bottom: 1px solid rgba(55, 53, 47, 0.16);
  color: #37352f;
  font-size: 0.935rem;
`

export class ListItemElement extends Component {
  render() {
    const checkExternalLink = () => {
      if (this.props.externalLink) {
        return (
          <ListItem>
            <ListIconWrap>
              <svg viewBox="0 0 30 30" className="page">
                <g>
                  {" "}
                  <path d="M16,1H4v28h22V11L16,1z M16,3.828L23.172,11H16V3.828z M24,27H6V3h8v10h10V27z M8,17h14v-2H8V17z M8,21h14v-2H8V21z M8,25h14v-2H8V25z"></path>{" "}
                </g>
              </svg>
            </ListIconWrap>
            <ListTextWrap>
              <ListTextParent>
                <ListText className="list--text">{this.props.title}</ListText>
              </ListTextParent>
            </ListTextWrap>
          </ListItem>
        )
      } else {
        return (
          <Link
            to={this.props.destination}
            ref={this.props.ref}
            onClick={this.props.handle}
          >
            <ListItem>
              <ListIconWrap>
                <svg viewBox="0 0 30 30" className="page">
                  <g>
                    {" "}
                    <path d="M16,1H4v28h22V11L16,1z M16,3.828L23.172,11H16V3.828z M24,27H6V3h8v10h10V27z M8,17h14v-2H8V17z M8,21h14v-2H8V21z M8,25h14v-2H8V25z"></path>{" "}
                  </g>
                </svg>
              </ListIconWrap>
              <ListTextWrap>
                <ListTextParent>
                  <ListText className="list--text">{this.props.title}</ListText>
                </ListTextParent>
              </ListTextWrap>
            </ListItem>
          </Link>
        )
      }
    }
    return (
      <ListParent className="list--parent">{checkExternalLink()}</ListParent>
    )
  }
}

export default ListItemElement
