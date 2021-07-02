import React from "react";
import "@fontsource/roboto";
import { Container, ThemeProvider, Typography, Paper } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import NavBar from "./Navbar";
import Icon from "../assets/thinking.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    backgroundColor: theme.palette.background.paper,
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
    marginRight: 24,
  },
  paper: {
    padding: 12,
  },
  footer: {
    padding: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  toolbar: theme.mixins.toolbar,
}));

export default function Layout({ children }) {
  const classes = useStyles();
  const theme = useTheme();
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
            {children}
          </Container>
        </main>
        <footer className={classes.footer}>
          <Typography variant="body2">
            Created by: Jakub Zarzeczny, 2021
          </Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
