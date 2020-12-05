import React from "react";
import Header from "../components/organisms/Header";
import styled from "styled-components";
import { Reset } from "styled-reset";
import Member from "../components/organisms/Member";
import Tomaru from "../Img/tomaru.jpg";
import Huruse from "../Img/huruse.jpg";
import Huruse2 from "../Img/huruse2.jpg";
import "antd/dist/antd.css";
const Wrapper = styled.div`
  background-color: rgb(229, 238, 255);
`;
const MemberWrapper = styled.div`
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 1150px;
  margin: 0 auto;
`;
const Members = [
  { name: "都丸", img: Tomaru, img2: Huruse },
  { name: "古瀬", img: Huruse, img2: Huruse2 },
  { name: "都丸", img: Tomaru, img2: Huruse },
  { name: "古瀬", img: Huruse, img2: Huruse2 },
  { name: "都丸", img: Tomaru, img2: Huruse },
  { name: "古瀬", img: Huruse, img2: Huruse2 },
  { name: "都丸", img: Tomaru, img2: Huruse },
  { name: "古瀬", img: Huruse, img2: Huruse2 },
  { name: "都丸", img: Tomaru, img2: Huruse },
  { name: "古瀬", img: Huruse, img2: Huruse2 },
  { name: "都丸", img: Tomaru, img2: Huruse },
  { name: "古瀬", img: Huruse, img2: Huruse2 },
  { name: "都丸", img: Tomaru, img2: Huruse },
  { name: "古瀬", img: Huruse, img2: Huruse2 },
  { name: "都丸", img: Tomaru, img2: Huruse },
  { name: "古瀬", img: Huruse, img2: Huruse2 },
  { name: "都丸", img: Tomaru, img2: Huruse },
  { name: "古瀬", img: Huruse, img2: Huruse2 },
  { name: "都丸", img: Tomaru, img2: Huruse },
  { name: "古瀬", img: Huruse, img2: Huruse2 },
] as const;
export default function member() {
  return (
    <Wrapper>
      <Reset />
      <Header />
      <MemberWrapper>
        {Members.map((contents) => (
          <Member
            img={contents.img}
            name={contents.name}
            img2={contents.img2}
          />
        ))}
      </MemberWrapper>
    </Wrapper>
  );
}
