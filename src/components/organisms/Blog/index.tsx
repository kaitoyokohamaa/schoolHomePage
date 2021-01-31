import React from "react";
import styled from "styled-components";
import { COLOR } from "../../../ColorCss";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Card } from "antd";
import Button from "../../atoms/Button";
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
  margin: 0 80px 80px 80px;
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
const Body = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px;
`;

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMicrocmsBlog {
        edges {
          node {
            blogId
            title
            contentImg {
              url
            }
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <Title>BLOG</Title>
      <Body>
        {data.allMicrocmsBlog.edges.slice(0, 3).map(({ node }) => (
          <li key={node.blogId}>
            <Link to={`/blog/${node.blogId}`}>
              <Card
                style={{ width: 400 }}
                cover={<img alt={node.title} src={node.contentImg.url} />}
                title={node.title}
                hoverable
              ></Card>
            </Link>
          </li>
        ))}
      </Body>
      <Button />
    </Wrapper>
  );
};

export default IndexPage;
