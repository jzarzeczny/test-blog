import React from "react";
import "@fontsource/roboto";
import {
  Container,
  ThemeProvider,
  Typography,
  CardMedia,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import NavBar from "../Components/Navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
}));

export default function Main() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Container className={classes.container}>
          <NavBar />
          <div className={classes.logoSection}>
            <CardMedia src="/thinking.svg" />
          </div>
          <main className={classes.content}>
            <div className={classes.drawerHeader} />
            <Typography variant="p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem quae veniam aut necessitatibus omnis, neque ut optio
              rem expedita blanditiis! Minus doloribus, tempore molestias aut
              suscipit aliquam esse aperiam quo? Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Maiores odio impedit at velit quas
              illum non tempore vero molestiae modi inventore deserunt amet
              ipsum autem voluptates laudantium, pariatur animi et!
            </Typography>
          </main>
        </Container>
      </ThemeProvider>
    </div>
  );
}
