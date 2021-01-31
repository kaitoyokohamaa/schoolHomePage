import React from "react";
import Header from "../components/organisms/Header";
import Top from "../components/organisms/Top";
import Project from "../components/organisms/Project";
import About from "../components/organisms/About";
import Blog from "../components/organisms/Blog";
import Contact from "../components/organisms/Contact";
import Footer from "../components/organisms/Footer";
import { Reset } from "styled-reset";
import { Meta } from "../components/organisms/Meta";
import { ReactGenieAnimations } from "react-genie-styled-components";
import styled from "styled-components";
import "./index.css";
import { Reveal } from "react-genie";
import { Animation } from "react-genie-styled-components";
import { COLOR } from "../ColorCss";
export default function Index() {
  const Wrapper = styled.div`
    background-color: ${COLOR["PRIMARY"]};
  `;

  return (
    <Wrapper>
      <Meta />
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
      <Reveal animation={Animation.FadeInUp}>
        <Blog />
      </Reveal>
      <Reveal animation={Animation.FadeInUp}>
        <Contact />
      </Reveal>
      <Footer />
    </Wrapper>
  );
}
