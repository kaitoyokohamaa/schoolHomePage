import React from "react";
import { graphql } from "gatsby";

const BlogPage = ({ data }) => (
  <>
    <h1>{data.microcmsBlog.title}</h1>
    <div
      dangerouslySetInnerHTML={{
        __html: `${data.microcmsBlog.body}`,
      }}
    />
  </>
);

export default BlogPage;

export const query = graphql`
  query($id: String!) {
    microcmsBlog(id: { eq: $id }) {
      blogId
      title
      body
    }
  }
`;
