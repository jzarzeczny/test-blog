import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Divider,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  image: {
    margin: "0 auto",
    width: "100%",
  },
  title: {
    textDecoration: "none",
  },
  p: {
    textDecoration: "none",

    margin: "16px 0",
  },
  date: {
    paddingTop: 16,
    textDecoration: "none",
  },
}));

export default function PostOnMain(props) {
  const classes = useStyles();
  const image = props.frontmatter.img.childrenImageSharp[0].gatsbyImageData;

  return (
    <Link to={"/posts/" + props.frontmatter.slug}>
      <Card>
        <CardActionArea className={classes.actionArea}>
          <GatsbyImage
            className={classes.image}
            image={image}
            alt={props.frontmatter.slug}
            aspectRatio={16 / 9}
            height={400}
            fit="cover"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h3"
              className={classes.title}
            >
              {props.frontmatter.title}
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              component="p"
              className={classes.p}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
              maxime rem iste explicabo aut optio natus eos rerum fugit vero,
              recusandae, debitis earum quidem at nisi hic harum laudantium vel?
            </Typography>
            <Divider />
            <Typography
              gutterBottom
              variant="body2"
              color="textPrimary"
              component="p"
              className={classes.date}
            >
              {props.frontmatter.date}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
