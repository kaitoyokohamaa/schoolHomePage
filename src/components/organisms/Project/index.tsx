import React, { Fragment } from "react";
import Main from "../MainProject";
import ProjectCard from "../ProjectCard";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import SuportsIcon from "../../../assets/suports.svg";
import CookIcon from "../../../assets/cook.svg";
import BooksIcon from "../../../assets/books.svg";
import LaughIcon from "../../../assets/laugh.svg";
import BlackboardIcon from "../../../assets/blackboard.svg";
import InstaIcon from "../../../assets/insta.svg";

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 58px;
  margin-top: -10px;
  background-color: #efefd7;
`;
const Title = styled.h2`
  font-weight: bold;
  text-align: center;
  margin: 80px;
  padding-top: 20px;
  font-size: 28px;
  position: relative;
  padding: 1.5rem;

  :before {
    position: absolute;
    bottom: -10px;
    left: calc(50% - 30px);
    width: 60px;
    height: 5px;
    content: "";
    border-radius: 3px;
    background: #000;
  }
`;
const ProjectWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  width: 100%;
`;
const SPProjectWrapper = styled.div`
  display: block;
  justify-content: center;
  width: 100%;
`;
const MainProjectWrapper = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr;
  width: 80%;
`;
const SPMainProjectWrapper = styled.div`
  display: block;
  justify-content: center;
  width: 100%;
`;
const StyledLink = styled.a``;
const MainProject = [
  {
    name: "お悩み聞きます",
    link: "https://schoolboards.herokuapp.com/",
    img: BlackboardIcon,
  },
  {
    name: "インスタ",
    link: "https://www.youtube.com/watch?v=wae1CnQJ4u0",
    img: InstaIcon,
  },
] as const;

const Project = [
  {
    name: "クッキング",
    link: "https://schoolboards.herokuapp.com/",
    img: CookIcon,
  },
  {
    name: "スポーツ",
    link: "https://www.youtube.com/watch?v=wae1CnQJ4u0",
    img: SuportsIcon,
  },
  {
    name: "一日一発真剣お笑い",
    link: "https://www.youtube.com/watch?v=pcP0FptwGyI",
    img: LaughIcon,
  },
  {
    name: "絵本作り",
    link: "https://www.youtube.com/watch?v=swpYHUW4s0o",
    img: BooksIcon,
  },
] as const;
export default function index() {
  return (
    <>
      <Wrapper>
        <Title>PROJECT</Title>
        {
          <MediaQuery minDeviceWidth={768}>
            <ProjectWrapper>
              {Project.map((contents) => {
                return (
                  <Fragment key={contents.link}>
                    <ProjectCard name={contents.name} img={contents.img} />;
                  </Fragment>
                );
              })}
            </ProjectWrapper>
          </MediaQuery>
        }
        {
          <MediaQuery maxDeviceWidth={768}>
            <SPProjectWrapper>
              {Project.map((contents) => {
                return (
                  <Fragment key={contents.link}>
                    <ProjectCard name={contents.name} img={contents.img} />;
                  </Fragment>
                );
              })}
            </SPProjectWrapper>
          </MediaQuery>
        }
        {
          <MediaQuery minDeviceWidth={768}>
            <MainProjectWrapper>
              {MainProject.map((contents) => {
                return (
                  <Fragment key={contents.link}>
                    <Main name={contents.name} img={contents.img} />;
                  </Fragment>
                );
              })}
            </MainProjectWrapper>
          </MediaQuery>
        }
        <MediaQuery maxDeviceWidth={768}>
          <SPMainProjectWrapper>
            {MainProject.map((contents) => {
              return (
                <Fragment key={contents.link}>
                  <Main name={contents.name} img={contents.img} />;
                </Fragment>
              );
            })}
          </SPMainProjectWrapper>
        </MediaQuery>
      </Wrapper>
    </>
  );
}
