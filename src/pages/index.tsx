import React from "react";
import { Layout } from "../components/organisms/Layout";
import Top from "../components/organisms/Top";
import Project from "../components/organisms/Project";
import About from "../components/organisms/About";
import Blog from "../components/organisms/Blog";
import Contact from "../components/organisms/Contact";
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
      <Layout>
        <Reveal animation={Animation.FadeInUp}>
          <Top />
        </Reveal>
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
      </Layout>
    </Wrapper>
  );
}
