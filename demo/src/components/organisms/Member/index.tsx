import React, { useState } from "react";
import styled from "styled-components";

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
    border: 8px solid #c9dbfb;
  }
`;
const Name = styled.h2`
  display: inline-block;
  background-color: #c9dbfb;
  padding: 3px 3px 2px 11px;
  font-family: "Noto Sans", "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro",
    Arial, "メイリオ", Meiryo, sans-serif, YuGothic, "游ゴシック", Meiryo,
    sans-serif;
  color: #282828;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.2em;
  border-radius: 0 5px 5px 0;
  margin-bottom: 0;
`;
const Discreption = styled.div`
  font-size: 12px;
  font-family: sans-serif;
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
        </>
      </ImgWrapper>
    </Wrapper>
  );
}
