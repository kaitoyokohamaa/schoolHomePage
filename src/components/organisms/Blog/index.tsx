import React from "react";
import styled from "styled-components";
import { COLOR } from "../../../ColorCss";
import { graphql, Link, useStaticQuery } from "gatsby";

const Wrapper = styled.section`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 58px;
  margin-top: -10px;
  background-color: ${COLOR["PRIMARY"]};
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

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMicrocmsBlog {
        edges {
          node {
            blogId
            title
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <Title>BLOG</Title>
      <ul>
        {data.allMicrocmsBlog.edges.map(({ node }) => (
          <li key={node.blogId}>
            <Link to={`/blog/${node.blogId}`}>{node.title}</Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default IndexPage;
