import React, { Component } from "react"
import { Link } from "gatsby"
import {
  ChildPagesWrapper,
  LabelWrapper,
  LabelParent,
  LabelCategoryChild,
  LabelTitleWrapper,
  LabelTitle,
} from "./HeaderComponents"

export class CategoryChildWrapper extends Component {
  render() {
    return (
      <ChildPagesWrapper className="childPagesWrapper">
        <LabelWrapper InnerChild className="label--wrapper">
          <LabelParent Transparent LessMargin>
            <LabelCategoryChild>
              <svg viewBox="0 0 30 30" className="page">
                <g>
                  {" "}
                  <path d="M16,1H4v28h22V11L16,1z M16,3.828L23.172,11H16V3.828z M24,27H6V3h8v10h10V27z M8,17h14v-2H8V17z M8,21h14v-2H8V21z M8,25h14v-2H8V25z"></path>{" "}
                </g>
              </svg>
            </LabelCategoryChild>
          </LabelParent>
          <LabelTitleWrapper>
            <Link to={this.props.destination} activeClassName="i-am-active">
              <LabelTitle
                className="label--title "
                Light
                onClick={this.props.handle}
              >
                {this.props.title}
              </LabelTitle>
            </Link>
          </LabelTitleWrapper>
        </LabelWrapper>
      </ChildPagesWrapper>
    )
  }
}

export default CategoryChildWrapper
