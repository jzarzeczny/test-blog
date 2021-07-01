import React from "react";
import "@fontsource/roboto";
import {
  Container,
  ThemeProvider,
  Typography,
  Paper,
  Grid,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import NavBar from "../Components/Navbar";
import Icon from "../assets/thinking.svg";
import MainPost from "../Components/MainPost";
import GridOfPosts from "../Components/GridOfPosts";

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
  paper: {
    padding: 12,
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
            <MainPost />
            <Paper elevation={3}>
              <Grid container spacing={3} className={classes.paper}>
                <GridOfPosts />
                <GridOfPosts />
                <GridOfPosts />
              </Grid>
            </Paper>
          </Container>
        </main>
      </ThemeProvider>
    </div>
  );
}
