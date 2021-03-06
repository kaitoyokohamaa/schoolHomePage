import React, { useState } from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
const Wrapper = styled.div``;

const ImgWrapper = styled.div`
  width: 287px;
  margin: 10px 20px 0;
  margin-top: 70px;
`;
const ImgArea = styled.div`
  transform-style: preserve-3d;
  transition: transform 0.8s ease;
  :hover {
    transform: rotateY(180deg);
  }
`;
const Img = styled.img`
  border-radius: 50%;
  width: 287px;
  height: 287px;

  :hover {
    width: 287px;
    height: 287px;
    border: 8px solid #fbfbf0;
  }
`;

const SPImg = styled.img`
  border-radius: 50%;
  width: 172px;
  height: 172px;
  padding: 10px;
`;
const Name = styled.h2`
  display: inline-block;
  background-color: #fbfbf0;
  padding: 3px 3px 2px 11px;
  color: #282828;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.2em;
  border-radius: 0 5px 5px 0;
  margin-bottom: 0;
`;
const Discreption = styled.div`
  font-size: 12px;
  line-height: 2.2;
  letter-spacing: 0.1em;
  text-align: left;
  color: #000;
  margin-top: 10px;
`;

type props = {
  name: string;
  img: string;
  img2: string;
  discription: string;
};

export default function Index(props: props) {
  const [hover, setHover] = useState(true);
  return (
    <Wrapper>
      <>
        <MediaQuery minDeviceWidth={768}>
          <ImgWrapper>
            {hover ? (
              <>
                <ImgArea
                  onMouseEnter={() => setHover(false)}
                  onMouseLeave={() => setHover(true)}
                >
                  <Img src={props.img} />
                </ImgArea>
                <Name>{props.name}</Name>
                <Discreption>{props.discription}</Discreption>
              </>
            ) : (
              <>
                <ImgArea
                  onMouseEnter={() => setHover(false)}
                  onMouseLeave={() => setHover(true)}
                >
                  <Img src={props.img2} />
                </ImgArea>{" "}
                <Name>{props.name}</Name>
                <Discreption>{props.discription}</Discreption>
              </>
            )}
          </ImgWrapper>
        </MediaQuery>

        <MediaQuery maxDeviceWidth={768}>
          <ImgArea>
            <SPImg src={props.img} />
          </ImgArea>
          <Name>{props.name}</Name>
        </MediaQuery>
      </>
    </Wrapper>
  );
}
