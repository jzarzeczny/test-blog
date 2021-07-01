import React from "react";
import "@fontsource/roboto";
import { Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import PostOnMain from "../components/PostOnMain";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 12,
  },
  mainPost: {
    marginBottom: 24,
  },
}));

export default function Home({ data }) {
  const posts = data.allMarkdownRemark.nodes;
  const [lastPost, ...oldPosts] = posts;

  const classes = useStyles();

  return (
    <Layout>
      <Paper elevation={2} className={(classes.paper, classes.mainPost)}>
        <PostOnMain frontmatter={lastPost.frontmatter} />
      </Paper>
      <Paper elevation={3} className={classes.grid}>
        <Grid container spacing={3} className={classes.paper}>
          {oldPosts.map((post) => (
            <Grid item xs={12} md={6}>
              <PostOnMain
                frontmatter={post.frontmatter}
                key={post.frontmatter.slug}
              />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Layout>
  );
}

export const PostsData = graphql`
  query PostsData {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        id
        frontmatter {
          slug
          tags
          title
          date(formatString: "DD MMMM YYYY")
          img {
            childrenImageSharp {
              gatsbyImageData(height: 400)
            }
          }
        }
      }
    }
  }
`;
