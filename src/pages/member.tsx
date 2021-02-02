import React, { Fragment } from "react";
import { Layout } from "../components/organisms/Layout";
import styled from "styled-components";
import { Reset } from "styled-reset";
import Member from "../components/organisms/Member";

import Kaito1 from "../assets/kaito1.jpg";
import Kaito2 from "../assets/kaito2.jpg";
import { v1 as uuidv1 } from "uuid";
import "./index.css";
import "antd/dist/antd.css";
import MediaQuery from "react-responsive";
import { COLOR } from "../ColorCss";
const Wrapper = styled.div`
  background-color: ${COLOR["PRIMARY"]};
`;

const Title = styled.span`
  text-align: center;
  width: 100%;
  font-weight: 700;
  margin-bottom: 2.5rem;
  font-size: 1.5rem;
  position: relative;
  display: inline-block;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  color: #000;
  margin-top: 168px;
`;
const MemberWrapper = styled.div`
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 1080px;
  margin: 0 auto;
  padding: 0 40px;
`;

const SPMemberWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap;
`;
const Members = [
  {
    name: "横浜海斗",
    id: uuidv1(),
    img: Kaito1,
    img2: Kaito2,
    discription:
      "俺の名前は横浜海斗。でも俺にはミドルネームがある。そのミドルネームはフェニックスだ。俺は不死身だ。得意な事は人を怒らせる事ですよろしくお願いします",
  },
  {
    name: "横浜海斗",
    id: uuidv1(),
    img: Kaito1,
    img2: Kaito2,
    discription:
      "俺の名前は横浜海斗。でも俺にはミドルネームがある。そのミドルネームはフェニックスだ。俺は不死身だ。得意な事は人を怒らせる事ですよろしくお願いします",
  },
  {
    name: "横浜海斗",
    id: uuidv1(),
    img: Kaito1,
    img2: Kaito2,
    discription:
      "俺の名前は横浜海斗。でも俺にはミドルネームがある。そのミドルネームはフェニックスだ。俺は不死身だ。得意な事は人を怒らせる事ですよろしくお願いします",
  },
  {
    name: "横浜海斗",
    id: uuidv1(),
    img: Kaito1,
    img2: Kaito2,
    discription:
      "俺の名前は横浜海斗。でも俺にはミドルネームがある。そのミドルネームはフェニックスだ。俺は不死身だ。得意な事は人を怒らせる事ですよろしくお願いします",
  },
] as const;
export default function member() {
  return (
    <Wrapper>
      <Reset />
      <Layout>
        <MediaQuery minDeviceWidth={768}>
          <MemberWrapper>
            <Title>ゼミメンバー</Title>
            {Members.map((contents) => (
              <Fragment key={contents.id}>
                <Member
                  img={contents.img}
                  name={contents.name}
                  img2={contents.img2}
                  discription={contents.discription}
                />
              </Fragment>
            ))}
          </MemberWrapper>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={768}>
          <SPMemberWrapper>
            <Title>ゼミメンバー</Title>
            {Members.map((contents) => (
              <Fragment key={contents.id}>
                <Member
                  img={contents.img}
                  name={contents.name}
                  img2={contents.img2}
                  discription={contents.discription}
                />
              </Fragment>
            ))}
          </SPMemberWrapper>
        </MediaQuery>
      </Layout>
    </Wrapper>
  );
}
