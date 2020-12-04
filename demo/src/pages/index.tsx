import React from "react";
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
const Wrapper = styled.div`
  background-color: rgb(229, 238, 255);
`;

export default function Index() {
  return (
    <Wrapper>
      <Reset />
      <ReactGenieAnimations />
      <Header />
      <Top />

      <Project />
      <About />
      <Footer />
    </Wrapper>
  );
}
