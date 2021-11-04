import React, { Component } from "react"
import { Link } from "gatsby"
import {
  CategorySet,
  LabelWrapper,
  LabelParent,
  LabelCategoryChild,
  LabelTitleWrapper,
  LabelTitle,
} from "./HeaderComponents"
export class CategorySetWrapper extends Component {
  state = {
    isHidden: true,
  }
  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden,
    })
  }

  render() {
    const { children } = this.props
    return (
      <CategorySet className={this.state.isHidden ? "" : "active"}>
        <LabelWrapper className="label--wrapper">
          <LabelParent Transparent LessMargin>
            <LabelCategoryChild onClick={this.toggleHidden}>
              <svg
                viewBox="0 0 100 100"
                className={this.state.isHidden ? "triangle" : "triangle active"}
              >
                <polygon points="5.9,88.2 50,11.8 94.1,88.2 "></polygon>
              </svg>
            </LabelCategoryChild>
          </LabelParent>
          <LabelTitleWrapper>
            <Link to={this.props.destination} activeClassName="i-am-active">
              <LabelTitle
                className="label--title "
                Bold
                onClick={this.props.handle}
              >
                {this.props.title}
              </LabelTitle>
            </Link>
          </LabelTitleWrapper>
        </LabelWrapper>
        {/* //End Parent Category */}
        {children}
      </CategorySet>
    )
  }
}

export default CategorySetWrapper
