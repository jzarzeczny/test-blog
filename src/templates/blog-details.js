import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { makeStyles, Paper } from "@material-ui/core";
import { GatsbyImage } from "gatsby-plugin-image";

const useStyles = makeStyles((theme) => ({
  image: {
    margin: "0 auto",
    width: "100%",
  },
}));

export default function BlogDetails({ data }) {
  console.log(data);
  const { html } = data.markdownRemark;
  const { title, tags, slug, img } = data.markdownRemark.frontmatter;
  const image = img.childrenImageSharp[0].gatsbyImageData;
  const classes = useStyles();

  return (
    <Layout>
      <Paper>
        <GatsbyImage
          image={image}
          alt={slug}
          aspectRatio={16 / 9}
          className={classes.image}
        />
      </Paper>
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
        slug
        tags
        title
        date(formatString: "DD MMMM YYYY")
        img {
          childrenImageSharp {
            id
            gatsbyImageData(
              layout: CONSTRAINED
              height: 300
              transformOptions: { fit: COVER }
            )
          }
        }
      }
    }
  }
`;
