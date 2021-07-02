import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { makeStyles, Paper, Typography, Divider } from "@material-ui/core";
import { GatsbyImage } from "gatsby-plugin-image";
import { ThemeProvider } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  image: {
    margin: "0 auto",
    width: "100%",
    borderRadius: 5,
  },
  postContainer: {
    padding: 24,
  },
  postTags: {
    padding: "24px 0",
  },
  postDate: {
    paddingTop: 24,
  },
}));

export default function BlogDetails({ data }) {
  const { html } = data.markdownRemark;
  const { title, tags, slug, img, date } = data.markdownRemark.frontmatter;
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
        <div className={classes.postContainer}>
          <Typography variant="h2">{title}</Typography>
          <Typography variant="subtitle1" className={classes.postTags}>
            {tags}
          </Typography>
          <Divider />
          <Typography dangerouslySetInnerHTML={{ __html: html }}></Typography>
          <Divider />
          <Typography variant="subtitle1" className={classes.postDate}>
            {date}
          </Typography>
        </div>
      </Paper>
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
              height: 400
              transformOptions: { fit: COVER }
            )
          }
        }
      }
    }
  }
`;
