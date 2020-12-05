import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  transform: translateX(-50%);
`;
const ImgWrapper = styled.div`
  width: 190px;
  text-align: center;
  margin: 10px 20px 0;
  margin-top: 70px;
  transform-style: preserve-3d;
  transition: transform 0.8s ease;
  :hover {
    transform: rotateY(180deg);
  }
`;
const ImgArea = styled.div``;
const Img = styled.img`
  border-radius: 50%;
  width: 190px;
  height: 190px;
  :hover {
    width: 190px;
    height: 190px;
    border: 8px solid #ffff;
  }
`;
const Name = styled.h2`
  :hover {
    transform: translateX(0%);
  }
`;
type props = {
  name: string;
  img: string;
  img2: string;
};

export default function Index(props: props) {
  const [hover, setHover] = useState(true);
  return (
    <Wrapper>
      <ImgWrapper>
        <>
          {hover ? (
            <>
              <ImgArea
                onMouseEnter={() => setHover(false)}
                onMouseLeave={() => setHover(true)}
              >
                <Img src={props.img} />
              </ImgArea>
              <Name>{props.name}</Name>
            </>
          ) : (
            <>
              <ImgArea
                onMouseEnter={() => setHover(false)}
                onMouseLeave={() => setHover(true)}
              >
                <Img src={props.img2} />
              </ImgArea>
              <Name>{props.name}</Name>
            </>
          )}
        </>
      </ImgWrapper>
    </Wrapper>
  );
}
