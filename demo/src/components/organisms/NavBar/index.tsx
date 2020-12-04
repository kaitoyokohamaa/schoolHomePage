import React, { Fragment, useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Logo from "../../atoms/Logo";
const Wrapper = styled.div`
  position: static;
  display: grid;
  display: flex;
  height: auto;
  width: 100%;
  min-height: auto;
  grid-template-rows: 1fr;
  grid-template-columns: 100%;
  padding-bottom: 0px;
  box-sizing: border-box;
  border: 0 solid #dae1e7;
`;

const NavWrapper = styled.div`
  dispaly: flex;
  margin-top: 58px;
  margin-left: 218px;
`;
const LinkWrapper = styled.div`
  &:hover {
    backgrounf-color: #ffff;
  }
`;

const menueLink = [
  {
    label: "ホーム",
    path: "/",
  },
  {
    label: "メンバー",
    path: "/member",
  },
  {
    label: "コンタクト",
    path: "/contact",
  },
] as const;

export default function index() {
  return (
    <Wrapper>
      <Logo />
      <NavWrapper>
        {menueLink?.map((link) => (
          <Link
            style={{
              margin: "0 30px",
              color: "#000",
            }}
            to={link.path}
          >
            {link.label}
          </Link>
        ))}
      </NavWrapper>
    </Wrapper>
  );
}
