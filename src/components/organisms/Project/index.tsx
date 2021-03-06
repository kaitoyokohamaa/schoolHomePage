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
import { Reveal } from "react-genie";
import { Animation } from "react-genie-styled-components";
import { Link } from "gatsby";
const Wrapper = styled.section`
  margin-left: auto;
  margin-right: auto;

  margin-top: -10px;
  width: 90%;
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  grid-template-rows: 1fr;
  gap: 20px;
  color: #000;
`;
const SPProjectWrapper = styled.div`
  display: block;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
`;
const MainProjectWrapper = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  padding-top: 42px;
  width: 80%;
`;
const SPMainProjectWrapper = styled.div`
  display: block;
  justify-content: center;
  width: 100%;
`;

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
        <Reveal animation={Animation.BounceInRight}>
          <Title>PROJECT</Title>
        </Reveal>
        {
          <MediaQuery minDeviceWidth={768}>
            <ProjectWrapper>
              {Project.map((contents) => {
                return (
                  <Link to={contents.link} target="_blank">
                    <Fragment key={contents.link}>
                      <ProjectCard name={contents.name} img={contents.img} />
                    </Fragment>
                  </Link>
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
                  <Link to={contents.link} target="_blank">
                    <Fragment key={contents.link}>
                      <ProjectCard name={contents.name} img={contents.img} />;
                    </Fragment>
                  </Link>
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
                  <Link to={contents.link} target="_blank">
                    <Fragment key={contents.link}>
                      <Main name={contents.name} img={contents.img} />;
                    </Fragment>
                  </Link>
                );
              })}
            </MainProjectWrapper>
          </MediaQuery>
        }
        <MediaQuery maxDeviceWidth={768}>
          <SPMainProjectWrapper>
            {MainProject.map((contents) => {
              return (
                <Link to={contents.link} target="_blank">
                  <Fragment key={contents.link}>
                    <Main name={contents.name} img={contents.img} />;
                  </Fragment>
                </Link>
              );
            })}
          </SPMainProjectWrapper>
        </MediaQuery>
      </Wrapper>
    </>
  );
}
