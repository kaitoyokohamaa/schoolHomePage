import React from "react";
import Header from "../components/organisms/Header";
import Top from "../components/organisms/Top";
import About from "../components/organisms/About";
import Footer from "../components/organisms/Footer";
import { Reset } from "styled-reset";
import "antd/dist/antd.css";

import { Reveal } from "react-genie";
import { Animation, ReactGenieAnimations } from "react-genie-styled-components";
export default function Index() {
  return (
    <div>
      <Reset />
      <ReactGenieAnimations />
      <Header />
      <Top />
      <Reveal animation={Animation.BounceInRight} delay={3}>
        <About />
      </Reveal>
      <Footer />
    </div>
  );
}
