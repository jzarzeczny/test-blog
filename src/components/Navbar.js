import React, { useState } from "react";
import { navigate } from "gatsby";
import {
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
  Hidden,
  Container,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/styles";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import DeckRoundedIcon from "@material-ui/icons/DeckRounded";
import LabelRoundedIcon from "@material-ui/icons/LabelRounded";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { ButtonGroup } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    backgroundColor: theme.palette.background.paper,
  },
  toolbar: {
    margin: "0 auto",
    width: "100%",
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
    marginBottom: 240,
  },
  drawerPaper: {
    width: drawerWidth,
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
  buttonGroup: {},
}));

export default function NavBar() {
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
      path: "/start",
    },
    {
      text: "Tagi",
      icon: <LabelRoundedIcon color="secondary" />,
      path: "/tags",
    },
  ];

  const openDrawer = () => {
    setVisible(true);
  };
  const handleDrawerClose = () => {
    setVisible(false);
  };

  return (
    <Container>
      <AppBar postion="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              navigate("/");
            }}
          >
            Psycho-delikt
          </Button>
          <Hidden smDown>
            <ButtonGroup
              color="primary"
              aria-label="primary button group"
              className={classes.buttonGroup}
            >
              {menuItems.map((item) => (
                <ListItem
                  button
                  key={item.text}
                  onClick={() => {
                    navigate(item.path);
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </ButtonGroup>
          </Hidden>
          <Hidden mdUp>
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
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
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
            <ListItem
              button
              key={item.text}
              onClick={() => {
                navigate(item.path);
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Container>
  );
}
