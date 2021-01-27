import React from "react";
import Header from "../components/organisms/Header";
import Top from "../components/organisms/Top";
import Project from "../components/organisms/Project";
import About from "../components/organisms/About";
import Footer from "../components/organisms/Footer";
import Contact from "../components/organisms/Contact";
import { Reset } from "styled-reset";

import { ReactGenieAnimations } from "react-genie-styled-components";
import styled from "styled-components";
import "./index.css";
import { Reveal } from "react-genie";
import { Animation } from "react-genie-styled-components";
import MediaQuery from "react-responsive";

import { COLOR } from "../ColorCss";
export default function Index() {
  const Wrapper = styled.div`
    background-color: ${COLOR["PRIMARY"]};
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
      <Contact />
      <Footer />
    </Wrapper>
  );
}
