import React from "react";
import styled from "styled-components";
import Wave from "../../../Img/topWave.jpg";
const Footer = styled.footer`
  width: 100%;
  border-top: 1px solid #dae1e7;
  text-align: center;
  background-color: #c9dbfb;
  margin-top: -10px;
  color: #000;
`;
const WaveImg = styled.img`
  width: 100%;
`;
export default function index() {
  return (
    <>
      <WaveImg src={Wave} />
      <Footer>Copyright © 2020 @kaikai All Rights Reserved.</Footer>
    </>
  );
}
