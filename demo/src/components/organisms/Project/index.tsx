import React from "react";
import ProjectCard from "../ProjectCard";
import styled from "styled-components";

import sample5 from "../../../Img/sample5.jpg";
import sample6 from "../../../Img/sample6.jpg";
import sample7 from "../../../Img/sample7.jpg";
import sample8 from "../../../Img/sample8.jpg";
import sample10 from "../../../Img/sample10.jpg";
import TopWave from "../../../Img/topWave.jpg";
import Wave from "../../../Img/wave.png";
const TopWaveImg = styled.img`
  margin-top: -20px;
  width: 100%;
`;
const WaveImg = styled.img`
  margin-top: -60px;
  width: 100%;
`;
const Wrapper = styled.section`
  margin-left: auto;
  margin-right: auto;
  background-color: #c9dbfb;
  padding-bottom: 58px;
  margin-top: -10px;
`;
const CardWrapper = styled.div`
  margin: 0 auto;
  width: 1080px;
`;
const ProjectCardWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
`;

const TitleWrapper = styled.h2`
  width: 100%;
  text-align: center;
  :before {
    content: "";
    display: block;
    text-align: center;
    position: absolute;
    width: 2px;
    height: 40px;
    margin: 0 auto 25px;
    background-color: black;
    left: 50%;
  }
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
  color: #0000000;
  margin-top: 68px;
`;
const StyledLink = styled.a``;

const Project = [
  { name: "相談", img: sample5, Link: "https://schoolboards.herokuapp.com/" },
  {
    name: "スポーツコーナー",
    img: sample6,
    Link: "https://www.youtube.com/watch?v=wae1CnQJ4u0",
  },
  {
    name: "一日一発真剣お笑い",
    img: sample7,
    Link: "https://www.youtube.com/watch?v=pcP0FptwGyI",
  },
  {
    name: "絵本作り",
    img: sample8,
    Link: "https://www.youtube.com/watch?v=swpYHUW4s0o",
  },
  {
    name: "オンライン海外旅行",
    img: sample10,
    Link: "https://www.youtube.com/watch?v=-aHHSxCh0c8",
  },
] as const;
export default function index() {
  return (
    <>
      <TopWaveImg src={TopWave} />
      <Wrapper>
        <TitleWrapper>
          <Title>プロジェクト</Title>
        </TitleWrapper>

        <CardWrapper>
          <ProjectCardWrapper>
            {Project.map((contents) => (
              <StyledLink href={contents.Link}>
                <ProjectCard name={contents.name} img={contents.img} />
              </StyledLink>
            ))}
          </ProjectCardWrapper>
        </CardWrapper>
      </Wrapper>
      <WaveImg src={Wave} />
    </>
  );
}
