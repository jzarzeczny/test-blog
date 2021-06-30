import React from "react";
import "@fontsource/roboto";
import { graphql } from "gatsby";
import {
  Container,
  ThemeProvider,
  Typography,
  CardMedia,
  Card,
  CardContent,
  CardActions,
  Button,
  Paper,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import NavBar from "../Components/Navbar";
import { CardActionArea } from "gatsby-material-ui-components";
import Icon from "../assets/thinking.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    backgroundColor: theme.palette.background.paper,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  logoSection: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  image: {
    width: 50,
  },
  logoSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 65,
    marginBottom: 24,
  },
  icon: {
    width: 50,
    margin: 20,
  },
  logoText: {
    marginRight: 20,
  },

  toolbar: theme.mixins.toolbar,
}));

export default function Home({ data }) {
  const classes = useStyles();
  const theme = useTheme();
  console.log(data);
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <NavBar />
        <div className={classes.toolbar} />
        <main className={classes.content}>
          <Container className={classes.container}>
            <Paper elevation={2} className={classes.logoSection}>
              <Icon className={classes.icon} />
              <Typography variant="h5" className={classes.logoText}>
                PSYCHODELIKT
              </Typography>
            </Paper>
            <Paper elevation={2}>
              <Card>
                <CardActionArea>
                  <CardMedia />
                  <CardContent>
                    <Typography variant="h5" component="h3">
                      Motywacja, jako siła napędowa
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      component="p"
                    >
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Id maxime rem iste explicabo aut optio natus eos rerum
                      fugit vero, recusandae, debitis earum quidem at nisi hic
                      harum laudantium vel?
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="medium" color="secondary">
                    Więcej
                  </Button>
                </CardActions>
              </Card>
            </Paper>
          </Container>
        </main>
      </ThemeProvider>
    </div>
  );
}

export const query = graphql`
  query Img {
    file(relativePath: { eq: "thinking.png" }) {
      id
    }
  }
`;
