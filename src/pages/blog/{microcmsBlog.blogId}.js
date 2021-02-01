import React from "react";
import { graphql } from "gatsby";
import Header from "../../components/organisms/Header";
import Footer from "../../components/organisms/Footer";
import { COLOR } from "../../ColorCss";
import styled from "styled-components";
const Wrapper = styled.section`
  margin-left: auto;
  margin-right: auto;
  color: #000;
  background-color: ${COLOR["PRIMARY"]};
  width: 100%;
  position: absolute;
  margin-top: 100px;
`;
const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
`;
const Body = styled.div`
  width: 70%;
  margin: 100px auto;
  background: #ffff;
  marign-top: 180px;
`;
const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 100px;
`;
const StyledImg = styled.img`
  width: 100%;
`;
const BlogPage = ({ data }) => (
  <Wrapper>
    <Header />
    <Body>
      <StyledImg src={data.microcmsBlog.contentImg.url} />
      <Content>
        <Title>{data.microcmsBlog.title}</Title>
        <div
          dangerouslySetInnerHTML={{
            __html: `${data.microcmsBlog.body}`,
          }}
        />
      </Content>
    </Body>
    <Footer />
  </Wrapper>
);

export default BlogPage;

export const query = graphql`
  query($id: String!) {
    microcmsBlog(id: { eq: $id }) {
      blogId
      title
      body
      contentImg {
        url
      }
    }
  }
`;
