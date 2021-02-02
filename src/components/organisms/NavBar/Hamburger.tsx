import React, { CSSProperties, FC } from "react";
import styled from "styled-components";
import { COLOR } from "../../../ColorCss";
export interface HamburgerProps {
  className?: string;
  style?: CSSProperties;

  opened?: boolean;

  onClick?(): void;
}

export const Hamburger: FC<HamburgerProps> = ({ opened, ...rest }) => {
  const Wrapper = styled.button`
    cursor: pointer;
    position: fixed;
    z-index: 13333300;
    top: 25px;
    right: 20px;
    width: 32px;
    height: 34px;
    text-decoration: none;
    background-color: transparent;
    border: 1px;
    transition: transform 0.3s;
  `;

  const StyledI = styled.i<HamburgerProps>`
    position: absolute;
    left: 0;
    width: 32px;
    height: 2.2px;
    transition: all 500ms ease !important;
    &:nth-of-type(1) {
      opacity: ${opened ? "0" : "1"};
      visibility: ${opened ? "hidden" : "visible"};
      content: "";
      top: 13px;
      background-color: #f06292;
    }
    &:nth-child(2) {
      opacity: ${opened ? "0" : "1"};
      visibility: ${opened ? "hidden" : "visible"};
      top: 19px;
      background-color: #ecc182;
    }
    &:nth-child(3) {
      ${opened &&
      `
            transform: rotateZ(-45deg) translate3d(5px, -7px, 0);
            `};
      width: ${opened ? "36px" : " 23px"};
      top: 25px;
      background-color: #ffeb3b;
    }
    &:nth-child(4) {
      ${opened &&
      `
      transform: rotateZ(45deg) translate3d(-11px, -9px, 0);
      `};
      width: ${opened ? "36px" : "15px"};
      top: 31px;
      background-color: #4fc3f7;
    }
  `;
  return (
    <Wrapper title={opened ? "メニューを閉じる" : "メニューを開く"} {...rest}>
      <StyledI aria-hidden="true"></StyledI>

      <StyledI aria-hidden="true"></StyledI>
      <StyledI aria-hidden="true"></StyledI>
      <StyledI aria-hidden="true"></StyledI>
    </Wrapper>
  );
};
