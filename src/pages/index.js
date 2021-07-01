import React from "react";
import "@fontsource/roboto";
import { Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MainPost from "../components/MainPost";
import GridOfPosts from "../components/GridOfPosts";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 12,
  },
}));

export default function Home({ data }) {
  const posts = data.allMarkdownRemark.nodes;
  console.log(posts);
  const classes = useStyles();
  return (
    <Layout>
      <MainPost />
      <Paper elevation={3}>
        <Grid container spacing={3} className={classes.paper}>
          {posts.map((post) => (
            <GridOfPosts frontmatter={post.frontmatter} />
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
        }
      }
    }
  }
`;
