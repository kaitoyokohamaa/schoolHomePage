import React from "react";
import { Carousel } from "antd";
import AllStudents from "../../../assets/allstudents.jpg";
import AllStudents2 from "../../../assets/allstudents2.jpg";
import Student from "../../../assets/student.jpg";
import Student2 from "../../../assets/student2.jpg";
import styled from "styled-components";
import { Reveal } from "react-genie";
import { Animation } from "react-genie-styled-components";
import MediaQuery from "react-responsive";
const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  opacity: 1;
  visibility: inherit;
  z-index: 20;
  margin: 48px 0px;
  font-size: 20px;
  padding-bottom: 5px;
  background-color: #efefd7;
  display: block;
`;

const Img = styled.img`
  width: 90%;
  min-height: 450px;
  max-height: 590px;
  margin: 0 auto;
  margin-top: 130px;
`;
const SPImg = styled.img`
  width: 100%;
  min-height: 450px;
  max-height: 590px;
  border-radius: 10px;
  margin: 0 auto;
`;

const SubTitle = styled.h2`
  display: block;
  font-size: 3rem;
  font-weight: bold;

  -webkit-letter-spacing: 0.15em;
  -moz-letter-spacing: 0.15em;
  -ms-letter-spacing: 0.15em;
  letter-spacing: 0.15em;
  position: absolute;
  background: #ffffff 0% 0% no-repeat padding-box;
  z-index: 3;
  opacity: 0.8;
  top: 297px;
  color: #000000;
  padding-left: 100px;

  :before {
    content: "";
    display: block;
    position: absolute;
    width: 8px;
    height: 100%;
    left: 0px;
    background: #c9dbfb;
  }
`;
const MiniTitle = styled.h3`
  font-size: 14px;
`;

export default function Index() {
  return (
    <>
      <Wrapper>
        {" "}
        <Carousel autoplay>
          <div>
            <h3>
              <MediaQuery minDeviceWidth={768}>
                <Img src={AllStudents} alt="allstudent" />
              </MediaQuery>
              <MediaQuery maxDeviceWidth={768}>
                <SPImg src={AllStudents} alt="allstudent" />
              </MediaQuery>
            </h3>
          </div>
          <div>
            <h3>
              <MediaQuery minDeviceWidth={768}>
                <Img src={AllStudents2} alt="allstudent2" />
              </MediaQuery>
              <MediaQuery maxDeviceWidth={768}>
                <SPImg src={AllStudents2} alt="allstudent2" />
              </MediaQuery>
            </h3>
          </div>
          <div>
            <h3>
              <MediaQuery minDeviceWidth={768}>
                <Img src={Student} alt="student" />
              </MediaQuery>
              <MediaQuery maxDeviceWidth={768}>
                {" "}
                <SPImg src={Student} alt="student" />
              </MediaQuery>
            </h3>
          </div>
          <div>
            <h3>
              <MediaQuery minDeviceWidth={768}>
                <Img src={Student2} alt="student2" />
              </MediaQuery>
              <MediaQuery maxDeviceWidth={768}>
                {" "}
                <SPImg src={Student2} alt="student2" />
              </MediaQuery>
            </h3>
          </div>
        </Carousel>
      </Wrapper>
    </>
  );
}
