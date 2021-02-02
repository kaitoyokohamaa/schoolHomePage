import React from "react";
import { Layout } from "../components/organisms/Layout";
import { graphql, Link } from "gatsby";
import { Card } from "antd";
import styled from "styled-components";
import { COLOR } from "../ColorCss";
import { Reset } from "styled-reset";
import MediaQuery from "react-responsive";
import { ReactGenieAnimations } from "react-genie-styled-components";
import { Animation } from "react-genie-styled-components";
import "./index.css";
const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  color: #000;
  width: 100%;
  position: absolute;
  background-color: ${COLOR["PRIMARY"]};
`;
const Title = styled.h2`
  text-align: center;
  width: 100%;
  font-weight: 700;
  margin-bottom: 2.5rem;
  font-size: 1.5rem;
  position: relative;
  display: inline-block;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  color: #000;
  margin-top: 168px;
`;
const Body = styled.div`
  width: 80%;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
`;
const SpBody = styled.div`
  width: 100%;
  margin: 50px auto;
  display: block;
`;
export default function blog({ data }) {
  return (
    <Wrapper>
      <Layout>
        <Title>BLOG</Title>{" "}
        <MediaQuery minDeviceWidth={768}>
          <Body>
            {data.allMicrocmsBlog.edges.map(({ node }) => (
              <li key={node.blogId}>
                <Link to={`/blog/${node.blogId}`}>
                  <Card
                    style={{ width: "100%" }}
                    cover={
                      <img
                        style={{ height: 266 }}
                        alt={node.title}
                        src={node.contentImg.url}
                      />
                    }
                    title={node.title}
                    hoverable
                  ></Card>
                </Link>
              </li>
            ))}
          </Body>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={768}>
          <SpBody>
            {data.allMicrocmsBlog.edges.map(({ node }) => (
              <li key={node.blogId}>
                <Link to={`/blog/${node.blogId}`}>
                  <Card
                    style={{ width: "100%", margin: "20px 0" }}
                    cover={
                      <img
                        style={{ height: 266 }}
                        alt={node.title}
                        src={node.contentImg.url}
                      />
                    }
                    title={node.title}
                    hoverable
                  ></Card>
                </Link>
              </li>
            ))}
          </SpBody>
        </MediaQuery>
      </Layout>
    </Wrapper>
  );
}
export const query = graphql`
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
`;
