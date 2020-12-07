import React, { useState, useEffect } from "react";
import Header from "../components/organisms/Header";
import Top from "../components/organisms/Top";
import Project from "../components/organisms/Project";
import About from "../components/organisms/About";
import Footer from "../components/organisms/Footer";

import { Reset } from "styled-reset";
import "antd/dist/antd.css";
import { ReactGenieAnimations } from "react-genie-styled-components";
import styled from "styled-components";
import "./index.css";
import { Reveal } from "react-genie";
import { Animation } from "react-genie-styled-components";
export default function Index() {
  const Wrapper = styled.div`
    background-color: #ffff;

    webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  `;

  return (
    <Wrapper>
      <Reset />
      <ReactGenieAnimations />
      <Header />
      <Top />
      <Reveal animation={Animation.FadeInUp}>
        <Project />
      </Reveal>
      <Reveal animation={Animation.FadeInUp}>
        <About />
      </Reveal>
      <Footer />
    </Wrapper>
  );
}
