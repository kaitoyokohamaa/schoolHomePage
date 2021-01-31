import React from "react";
import { graphql } from "gatsby";
import Header from "../../components/organisms/Header";
import Footer from "../../components/organisms/Footer";
import { COLOR } from "../../ColorCss";
import styled from "styled-components";
const Wrapper = styled.section`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 58px;
  color: #000;
  background-color: ${COLOR["PRIMARY"]};
`;
const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
`;
const Body = styled.div`
  padding-top: 150px;
  width: 80%;
  margin: 0 auto;
`;
const StyledImg = styled.img``;
const BlogPage = ({ data }) => (
  <Wrapper>
    <Header />
    <Body>
      <StyledImg src={data.microcmsBlog.contentImg.url} />
      <Title>{data.microcmsBlog.title}</Title>
      <div
        dangerouslySetInnerHTML={{
          __html: `${data.microcmsBlog.body}`,
        }}
      />
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
