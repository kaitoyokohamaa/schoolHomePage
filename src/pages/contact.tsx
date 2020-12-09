import React from "react";
import { Reset } from "styled-reset";
import styled from "styled-components";
import Header from "../components/organisms/Header";
import "./index.css";
import Footer from "../components/organisms/Footer";
const Iframe = styled.iframe`
  width: 100%;
  height: 500px;
`;

const TitleWrapper = styled.div`
  margin-top: -10px;
`;
const Title = styled.span`
  text-align: center;
  width: 100%;
  font-weight: 700;
  padding-bottom: 3.5rem;
  font-size: 1.5rem;
  background-color: #fff;
  display: inline-block;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  color: #000;
  padding-top: 68px;
`;
export default function contact() {
  return (
    <div>
      <Reset />
      <Header />
      <TitleWrapper>
        <Title>コンタクトページ</Title>
        <Iframe src="https://ws.formzu.net/fgen/S83317592/"></Iframe>
      </TitleWrapper>

      <Footer />
    </div>
  );
}
