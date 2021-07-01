import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/styles";
import { Link } from "gatsby";

import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  image: {
    margin: "0 auto",
    width: "100%",
  },
}));

export default function PostOnMain(props) {
  const classes = useStyles();
  return (
    <Link to={"/posts/" + props.frontmatter.slug}>
      <Card>
        <CardActionArea className={classes.actionArea}>
          <StaticImage
            className={classes.image}
            src="../images/people.jpg"
            alt="image"
            aspectRatio={16 / 9}
            height={400}
            fit="cover"
          ></StaticImage>
          <CardContent>
            <Typography variant="h5" component="h3">
              {props.frontmatter.title}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
              maxime rem iste explicabo aut optio natus eos rerum fugit vero,
              recusandae, debitis earum quidem at nisi hic harum laudantium vel?
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
