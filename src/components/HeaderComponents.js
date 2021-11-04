import React, { Component } from "react"
import styled from "styled-components"
export const GlobalHeader = styled.header`
  background-color: #fff;
  padding: 1rem 0;
  width: 100%;
  position: fixed;
  top: 0;
  @media (min-width: 992px) {
    position: static;
  }
`
export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .no--browser-colors {
    text-decoration: none;
    color: inherit;
    &:hover {
      color: #dd4a68;
    }
  }
`

export const Drawer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  pointer-events: auto;
  max-height: 100vh;
  width: 232px;
  opacity: 1;
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(247, 246, 243);
  z-index: 1000;
  opacity: 0;
  transition: 0.2s ease;
  pointer-events: none;
  visibility: hidden;
  transform: translateX(-232px);
  padding-top: 0.25rem;
  &.active {
    visibility: visible;
    pointer-events: all;
    transition: 0.2s ease;
    opacity: 1;
    transform: translateX(0);
  }
  @media (min-width: 992px) {
    visibility: visible;
    pointer-events: all;
    transition: 0.2s ease;
    opacity: 1;
    transform: translateX(0);
    position: static;
    height: 100vh;
  }
  a {
    text-decoration: none;
    width: 100%;
  }
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  &:focus {
    outline: none;
  }
  &.close-drawer {
    @media (min-width: 992px) {
      display: none;
    }
  }
  &.hamburger-wrapper {
    padding-left: 0;
    @media (min-width: 992px) {
      display: none;
    }
  }
`
export const Column = styled.div`
  display: flex;
  align-items: center;
`

export const Span = styled.span`
  padding-left: 0.5rem;
  @media (min-width: 992px) {
    padding-left: 0;
  }
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 250px;
  @media (max-width: 360px) {
    max-width: 200px;
  }
  overflow: hidden;
  @media (min-width: 768px) {
    max-width: 500px;
  }
`

export const NightTogglerWrapper = styled.div`
  cursor: pointer;
`

export const NightToggler = styled.div`
  display: flex;
  flex-shrink: 0;
  height: 14px;
  width: 26px;
  border-radius: 44px;
  padding: 2px;
  box-sizing: content-box;
  background: rgba(135, 131, 120, 0.3);
  transition: background 200ms ease 0s, box-shadow 200ms ease 0s;
  position: relative;
  &.active {
    background: rgb(46, 170, 220);
  }
  input {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 11;
    cursor: pointer;
  }
`
export const NightTogglerChild = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 44px;
  background: white;
  transition: transform 200ms ease-out 0s, background 200ms ease-out 0s;
  transform: translateX(0px) translateY(0px);
  &.active {
    transform: translateX(12px) translateY(0px);
    trnasiton: transform 200ms ease-out 0s;
  }
`

export const Tint = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 0.2s ease;
  opacity: 0;
  transition: 0.2s ease;
  pointer-events: none;
  visibility: hidden;
  &.active {
    visibility: visible;
    pointer-events: all;
    transition: 0.2s ease;
    opacity: 1;
    z-index: 999;
  }
  @media (min-width: 992px) {
    display: none;
  }
`

export const LabelGrandWrapper = styled.div`
  user-select: none;
  transition: background 120ms ease-in 0s;
  cursor: pointer;
  display: flex;
  align-items: center;
  min-width: 0px;
  height: 45px;
`

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 27px;
  font-size: 14px;
  padding: ${props => (props.InnerChild ? "2px 14px 2px 28px" : "2px 14px")};
  width: 100%;
  overflow: hidden;
  &:hover {
    background: rgba(55, 53, 47, 0.08);
    cursor: pointer;
  }
  &.clicked {
    background: rgba(55, 53, 47, 0.16);
  }
`

export const LabelParent = styled.div`
  border-radius: 3px;
  width: 18px;
  height: 18px;
  background: ${props =>
    props.Transparent ? "transparent" : "rgba(55, 53, 47, 0.4)"};
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${props => (props.LessMargin ? "4px" : "6px")};
`

export const LabelChild = styled.div`
  line-height: 1.1;
  font-size: 12.21px;
`

export const LabelCategoryChild = styled.div`
  user-select: none;
  transition: background 120ms ease-in 0s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 3px;
`

export const LabelTitleWrapper = styled.div`
  flex: 1 1 auto;
  white-space: nowrap;
  min-width: 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  a {
    text-decoration: none;
  }
`
export const LabelTitle = styled.div`
  margin-right: 6px;
  color: ${props =>
    props.Light ? "rgba(55, 53, 47, 0.6)" : "rgb(55, 53, 47)"};
  font-weight: 600;
  margin-top: 0px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const StaticLinksWrapper = styled.div`
  padding: 1rem 0;
  overflow-y: ${props => (props.CategoryWrapper ? "scroll" : "")};
  &::-webkit-scrollbar {
    display: none;
  }
`

export const ChildPagesWrapper = styled.div`
  display: none;
`

export const CategorySet = styled.div`
  &.active {
    .childPagesWrapper {
      display: block;
    }
  }
`

export const FlexContainer = styled.div`
  @media (min-width: 992px) {
    display: flex;
  }
`

export class HeaderComponents extends Component {
  render() {
    return <div></div>
  }
}

export default HeaderComponents
