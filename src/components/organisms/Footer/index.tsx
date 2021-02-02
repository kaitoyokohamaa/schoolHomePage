import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  width: 100%;
  height: 150px;
  border-top: 1px solid #dae1e7;
  text-align: left;
  padding: 30px 0 0 60px;
  color: #ede6d5;
  background-color: #a39670;
  line-height: initial;
`;

const FooterTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
const FooterSubTitle = styled.div``;
export default function index() {
  return (
    <>
      <Footer>
        <FooterTitle>TOKO UTIDA</FooterTitle>
        <FooterSubTitle>
          東洋大学子ども支援額内田ゼミナール　All rights reserved
        </FooterSubTitle>
      </Footer>
    </>
  );
}
