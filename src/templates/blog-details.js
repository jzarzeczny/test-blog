import React from "react";
import { graphql } from "gatsby";

export default function BlogDetails({ data }) {
  console.log(data);
  const { html } = data.markdownRemark;
  const { title, tags, img } = data.markdownRemark.frontmatter;

  return (
    <div>
      <h1>{title}</h1>
      <p>{tags}</p>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
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
