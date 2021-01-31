import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Logo from "../../atoms/Logo";

import { Hamburger } from "./Hamburger";
import MediaQuery from "react-responsive";

const menueLink = [
  {
    label: "ホーム",
    path: "/",
  },
  {
    label: "ゼミについて",
    path: "/about",
  },
  {
    label: "メンバー",
    path: "/member",
  },
] as const;

export default function index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const Wrapper = styled.div`
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
    padding-bottom: 10px;
    position: fixed;
    color: #ede6d5;
    background-color: #a39670;
    top: 0;
    z-index: 20000;
    padding: 20px 0px;
  `;

  const NavWrapper = styled.div`
    dispaly: flex;
    margin-top: 25px;
    margin-left: 218px;
  `;

  const SPNavWrapper = styled.div`
    transform: translateY(${(menuOpen) => (menuOpen ? "0" : "-100%")});
    transition: transform 0.3s;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 68px 32px 0;
    background-color: #ffff;
    z-index: 20000;
  `;

  const NavLink = styled(Link)`
    color: #ede6d5;
    padding: 30px 40px;
    &:hover {
      color: #574100;
    }
  `;

  const SPNavLink = styled(Link)`
    padding: 30px 40px;
    display: block;
    &:hover {
      color: #574100;
    }
  `;

  return (
    <>
      <Wrapper>
        <Logo />
        <MediaQuery minDeviceWidth={768}>
          <NavWrapper>
            {menueLink?.map((link) => (
              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  color: "#574100",
                }}
                to={link.path}
              >
                {link.label}
              </NavLink>
            ))}
          </NavWrapper>
        </MediaQuery>
      </Wrapper>
      <MediaQuery maxDeviceWidth={768}>
        <Hamburger opened={menuOpen} onClick={() => setMenuOpen((v) => !v)} />
      </MediaQuery>
      {menuOpen && (
        <SPNavWrapper>
          {menueLink?.map((link) => (
            <SPNavLink
              activeStyle={{
                fontWeight: "bold",
                color: "#ff8a73",
              }}
              to={link.path}
            >
              {link.label}
            </SPNavLink>
          ))}
        </SPNavWrapper>
      )}
    </>
  );
}
