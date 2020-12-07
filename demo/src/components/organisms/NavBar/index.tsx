import React, { Fragment, useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Logo from "../../atoms/Logo";
import Wave from "../../../Img/wave.png";
const Wrapper = styled.div`
  padding-top: 30px;

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
  background-color: #c9dbfb;
`;

const NavWrapper = styled.div`
  dispaly: flex;
  margin-top: 58px;
  margin-left: 218px;
`;
const NavLink = styled(Link)`
  color: #000;
  padding: 30px 40px;
  &:hover {
    color: #ff8a73;
  }
`;
const WaveImg = styled.img`
  margin-top: -18px;
  width: 100%;
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
    <>
      <Wrapper>
        <Logo />
        <NavWrapper>
          {menueLink?.map((link) => (
            <NavLink
              activeStyle={{
                fontWeight: "bold",
                color: "#ff8a73",
              }}
              to={link.path}
            >
              {link.label}
            </NavLink>
          ))}
        </NavWrapper>
      </Wrapper>
      <WaveImg src={Wave} />
    </>
  );
}
