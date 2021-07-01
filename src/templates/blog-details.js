import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export default function BlogDetails({ data }) {
  console.log(data);
  const { html } = data.markdownRemark;
  const { title, tags, img } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <h1>{title}</h1>
      <p>{tags}</p>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  );
}

export const query = graphql`
  query MyQuery($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        tags
        title
      }
    }
  }
`;
