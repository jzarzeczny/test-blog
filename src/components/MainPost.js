import React from "react";
import { CardActionArea } from "gatsby-material-ui-components";
import { StaticImage } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/styles";

import { Card, CardContent, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  image: {
    margin: "0 auto",
    width: "100%",
  },
  paper: {
    marginBottom: 24,
  },
}));
export default function MainPost() {
  const classes = useStyles();

  return (
    <Paper elevation={2} className={classes.paper}>
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
              Motywacja, jako siła napędowa
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
              maxime rem iste explicabo aut optio natus eos rerum fugit vero,
              recusandae, debitis earum quidem at nisi hic harum laudantium vel?
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Paper>
  );
}
