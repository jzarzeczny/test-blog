import React, { useState } from "react";
import "@fontsource/roboto";
import {
  Container,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/styles";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import DeckRoundedIcon from "@material-ui/icons/DeckRounded";
import LabelRoundedIcon from "@material-ui/icons/LabelRounded";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const drawerWidth = 240;

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  toolbar: {
    justifyContent: "space-between",
  },
  hidden: {
    display: "none",
  },
  appBarShift: {
    width: `calc(100% = ${drawerWidth}px)`,
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flexStart",
  },
});

export default function Main() {
  const classes = useStyles();

  const [visible, setVisible] = useState(false);

  const menuItems = [
    {
      text: "Strona główna",
      icon: <HomeRoundedIcon color="secondary" />,
      path: "/",
    },
    {
      text: "Zacznij tutaj",
      icon: <DeckRoundedIcon color="secondary" />,
      path: "/",
    },
    {
      text: "Tagi",
      icon: <LabelRoundedIcon color="secondary" />,
      path: "/",
    },
  ];

  const openDrawer = () => {
    setVisible(true);
  };
  const handleDrawerClose = () => {
    setVisible(false);
  };

  return (
    <div className={classes.root}>
      <Container>
        <AppBar postion="static">
          <Toolbar className={classes.toolbar}>
            <Button variant="contained" color="secondary">
              Psycho-delikt
            </Button>

            <IconButton
              onClick={openDrawer}
              edge="end"
              fontSize="medium"
              color="inherit"
              aria-label="menu"
              className={visible ? classes.hidden : null}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <main className="content">
          <div className="drawerHeader" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
            quae veniam aut necessitatibus omnis, neque ut optio rem expedita
            blanditiis! Minus doloribus, tempore molestias aut suscipit aliquam
            esse aperiam quo? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Maiores odio impedit at velit quas illum non
            tempore vero molestiae modi inventore deserunt amet ipsum autem
            voluptates laudantium, pariatur animi et!
          </p>
        </main>
        <Drawer
          variant="presistent"
          anchor="right"
          open={visible}
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className="drawerHeader">
            <IconButton onClick={handleDrawerClose}>
              <ChevronRightIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.text}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Container>
    </div>
  );
}
