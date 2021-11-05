import { Link } from "gatsby"
import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"
import CategorySetWrapper from "./CategorySet"
import CategoryChildWrapper from "./CategoryChild"

// Importing Components

import {
  Drawer,
  LabelGrandWrapper,
  LabelWrapper,
  LabelParent,
  LabelChild,
  LabelTitleWrapper,
  LabelTitle,
  Button,
  StaticLinksWrapper,
  Tint,
} from "./HeaderComponents"

class DrawerContents extends Component {
  slugify = text => {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(/[^\w-]+/g, "") // Remove all non-word chars
      .replace(/--+/g, "-") // Replace multiple - with single -
      .replace(/^-+/, "") // Trim - from start of text
      .replace(/-+$/, "") // Trim - from end of text
  }
  render() {
    return (
      <div>
        <Drawer className={"drawer--contents " + this.props.hamBurgerState}>
          <LabelGrandWrapper>
            <LabelWrapper className="label--wrapper">
              <LabelParent className="label--parent">
                <LabelChild>A</LabelChild>
              </LabelParent>
              <Link to="/">
                <LabelTitleWrapper onClick={this.props.closeDrawer}>
                  <LabelTitle className="label--title ">
                    Ali Hassnain
                  </LabelTitle>
                </LabelTitleWrapper>
              </Link>
              <Button
                role="Close Drawer"
                type="button"
                className="close-drawer"
                onClick={this.props.handleDrawer}
              >
                <svg viewBox="0 0 14 14" className="doubleChevronLeft">
                  <path d="M7 2.225L5.775 1L0 7.125L5.775 13.25L7 12.025L2.45 7.125L7 2.225ZM14 2.225L12.775 1L7 7.125L12.775 13.25L14 12.025L9.45 7.125L14 2.225Z"></path>
                </svg>
              </Button>
            </LabelWrapper>
          </LabelGrandWrapper>
          <StaticLinksWrapper>
            <LabelWrapper className="label--wrapper">
              <LabelParent Transparent LessMargin>
                <LabelChild Large>
                  <svg viewBox="0 0 14 14" className="sidebarSearch">
                    <path d="M5.92239093,0.540000021 C2.94055203,0.540000021 0.5,2.98052217 0.5,5.96238099 C0.5,8.9442199 2.94055203,11.384762 5.92239093,11.384762 C7.02329179,11.384762 8.05258749,11.0564678 8.91032559,10.4866744 L12.1460745,13.6802311 C12.5695899,14.1037465 13.2589477,14.1037465 13.6823635,13.6802311 C14.1058788,13.2567158 14.1058788,12.5730353 13.6823635,12.1495199 L10.4410368,8.95033558 C11.0107904,8.09259747 11.3447619,7.06329182 11.3447619,5.96238099 C11.3447619,2.98052217 8.90420992,0.540000021 5.92239093,0.540000021 Z M5.92239093,2.70895241 C7.7320027,2.70895241 9.17580956,4.15272939 9.17580956,5.96238099 C9.17580956,7.77201268 7.7320027,9.21581954 5.92239093,9.21581954 C4.11275925,9.21581954 2.66895239,7.77201268 2.66895239,5.96238099 C2.66895239,4.15272939 4.11275925,2.70895241 5.92239093,2.70895241 Z"></path>
                  </svg>
                </LabelChild>
              </LabelParent>
              <LabelTitleWrapper>
                <LabelTitle
                  onClick={this.props.searchHandle}
                  className="label--title "
                  Light
                >
                  Quick Find
                </LabelTitle>
              </LabelTitleWrapper>
            </LabelWrapper>
          </StaticLinksWrapper>
          {/* Category Links Start Here */}
          <StaticLinksWrapper CategoryWrapper>
            {/* Parent Catgory */}
            <StaticQuery
              query={query}
              render={data => {
                let obj = []
                data.allMarkdownRemark.edges.forEach(({ node, index }) => {
                  const dataObj = node.frontmatter
                  const categories = dataObj.tags.join("")
                  obj.push({
                    label: categories,
                    data: {
                      title: dataObj.title,
                      destination: "/" + node.fields.slug,
                    },
                  })
                })
                var seen = {}
                obj = obj.filter(function(entry) {
                  var previous
                  if (seen.hasOwnProperty(entry.label)) {
                    previous = seen[entry.label]
                    previous.data.push(entry.data)
                    return false
                  }
                  if (!Array.isArray(entry.data)) {
                    entry.data = [entry.data]
                  }
                  seen[entry.label] = entry
                  return true
                })
                return (
                  <div>
                    {obj.map((elem, index) => (
                      <CategorySetWrapper
                        destination={"/tag/" + this.slugify(elem.label)}
                        key={index}
                        title={elem.label}
                        handle={this.props.closeDrawer}
                      >
                        {elem.data.map((innerPages, index) => (
                          <CategoryChildWrapper
                            destination={innerPages.destination}
                            handle={this.props.closeDrawer}
                            title={innerPages.title}
                            key={index}
                          />
                        ))}
                      </CategorySetWrapper>
                    ))}
                  </div>
                )
              }}
            />

            {/* //End Inner Pages */}
          </StaticLinksWrapper>

          <StaticLinksWrapper>
            <LabelWrapper className="label--wrapper">
              <LabelParent Transparent LessMargin>
                <LabelChild Large>
                  <svg viewBox="0 0 14 14" className="typesCreatedAt">
                    <path d="M6.98643729,14.0000972 C5.19579566,14.0000972 3.40419152,13.3106896 2.04245843,11.9323606 C-0.681017475,9.21200555 -0.680780251,4.76029539 2.04293482,2.04012507 C4.76664406,-0.68004331 9.22427509,-0.68004331 11.9480135,2.04013479 C13.272481,3.36277455 14,5.1330091 14,6.99552762 C14,8.87640182 13.2721894,10.6285043 11.9480135,11.9509302 C10.5679344,13.3105924 8.77756503,14.0000972 6.98643729,14.0000972 Z M10.2705296,7.00913883 L10.2705296,8.46099754 L10.2705296,8.65543362 L10.076181,8.65543362 L8.6543739,8.65543362 L5.72059514,8.65543362 L5.52619796,8.65543362 L5.52619796,8.46099754 L5.52619796,5.52541044 L5.52619796,3.37946773 L5.52619796,3.18502193 L5.72059514,3.18502193 L7.17253164,3.18502193 L7.36692883,3.18502193 L7.36692883,3.37946773 L7.36692883,6.81467358 L10.076181,6.81467358 L10.2705296,6.81467358 L10.2705296,7.00913883 Z M12.1601539,6.99552762 C12.1601539,5.61697497 11.6190112,4.32597154 10.6393933,3.34769528 C8.63253764,1.34336744 5.35197452,1.34061603 3.34153136,3.33944106 C3.33868273,3.34219247 3.33607716,3.34494388 3.33322852,3.34769528 C1.32397148,5.35459953 1.32372842,8.63641682 3.33322852,10.6433794 C5.34295224,12.6504489 8.62968901,12.6504489 10.6393933,10.6433794 C11.6190112,9.66506426 12.1601539,8.37408027 12.1601539,6.99552762 Z"></path>
                  </svg>
                </LabelChild>
              </LabelParent>
              <Link
                to="/articles"
                onClick={this.props.handleDrawer}
                activeClassName="i-am-active"
              >
                <LabelTitleWrapper>
                  <LabelTitle className="label--title " Light>
                    Articles
                  </LabelTitle>
                </LabelTitleWrapper>
              </Link>
            </LabelWrapper>
            <LabelWrapper className="label--wrapper">
              <LabelParent Transparent LessMargin>
                <LabelChild Large>
                  <svg viewBox="0 0 18 18" className="plus">
                    <polygon points="17,8 10,8 10,1 8,1 8,8 1,8 1,10 8,10 8,17 10,17 10,10 17,10 "></polygon>
                  </svg>
                </LabelChild>
              </LabelParent>
              <Link
                to="/contact"
                onClick={this.props.handleDrawer}
                activeClassName="i-am-active"
              >
                <LabelTitleWrapper>
                  <LabelTitle className="label--title " Light>
                    Contact
                  </LabelTitle>
                </LabelTitleWrapper>
              </Link>
            </LabelWrapper>
            <LabelWrapper className="label--wrapper-fiver">
              <LabelParent Transparent LessMargin>
                <LabelChild Large>
                  <svg viewBox="0 0 14 14" className="portfolio">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.237 1l7.84 1.237-1.201 7.61L11.5 6.15 9.424 9.38 6 8.84 7.237 1zM5.545 5.31a4 4 0 1 0 2.29 4.832l-2.979-.47.689-4.363zM7 15l4.5-7 4.5 7H7z"
                    ></path>
                  </svg>
                </LabelChild>
              </LabelParent>
              <Link
                to="https://www.fiverr.com/alihassnain5/make-fast-and-responsive-web-applications-for-you"
                onClick={this.props.handleDrawer}
                activeClassName="i-am-active"
              >
                <LabelTitleWrapper>
                  <LabelTitle className="label--title " Light>
                    Fiver
                  </LabelTitle>
                </LabelTitleWrapper>
              </Link>
            </LabelWrapper>
          </StaticLinksWrapper>
        </Drawer>
        <Tint className={this.props.hamBurgerState} />
      </div>
    )
  }
}

export default DrawerContents

export const query = graphql`
  query NavigationQuery {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            date
            author
            tags
          }
          excerpt
        }
      }
    }
  }
`
