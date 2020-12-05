import React from "react";
import ProjectCard from "../ProjectCard";
import styled from "styled-components";
import { Reveal } from "react-genie";
import { Animation } from "react-genie-styled-components";
import sample5 from "../../../Img/sample5.jpg";
import sample6 from "../../../Img/sample6.jpg";
import sample7 from "../../../Img/sample7.jpg";
import sample8 from "../../../Img/sample8.jpg";
import sample10 from "../../../Img/sample10.jpg";

const Wrapper = styled.section`
  margin-left: auto;
  margin-right: auto;
  border: 0 solid #dae1e7;
  background: #ffff;
  padding-bottom: 58px;
`;
const CardWrapper = styled.div`
  margin: 0 auto;
  width: 88%;
`;
const ProjectCardWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
`;

const Title = styled.h1`
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
  margin-top: 78px;
  :before {
    content: "";
    transform: translateY(50%) translateX(-50%);
    left: 50%;
    top: 40px;
    position: absolute;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 9999px;
    background-color: black;
  }
`;

const Project = [
  { name: "相談", img: sample5 },
  { name: "スポーツコーナー", img: sample6 },
  { name: "一日一発真剣お笑い", img: sample7 },
  { name: "絵本作り", img: sample8 },
  { name: "オンライン海外旅行", img: sample10 },
] as const;
export default function index() {
  return (
    <Wrapper>
      <Title>プロジェクト</Title>
      <CardWrapper>
        <ProjectCardWrapper>
          {Project.map((contents) => (
            <Reveal animation={Animation.FadeInUp} delay={1}>
              <ProjectCard name={contents.name} img={contents.img} />
            </Reveal>
          ))}
        </ProjectCardWrapper>
      </CardWrapper>
    </Wrapper>
  );
}
