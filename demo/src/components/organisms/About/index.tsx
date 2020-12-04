import React from "react";
import ProjectCard from "../ProjectCard";
import styled from "styled-components";
const CardWrapper = styled.div`
  margin: 0 auto;
  width: 88%;
`;
const ProjectCardWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
`;

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
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
  color: #ffff;
  margin-top: 34px;
  :before {
    content: "";
    transform: translateY(50%) translateX(-50%);
    left: 50%;
    top: 50px;
    position: absolute;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 9999px;
    background-color: #fff;
  }
`;
export default function index() {
  return (
    <Wrapper>
      <Title>プロジェクト</Title>
      <CardWrapper>
        <ProjectCardWrapper>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </ProjectCardWrapper>
      </CardWrapper>
    </Wrapper>
  );
}
