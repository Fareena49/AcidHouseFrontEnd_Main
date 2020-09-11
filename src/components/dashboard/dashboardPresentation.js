import React from "react";
import clsx from "clsx";

import {
  Drawer,
  List,
  CssBaseline,
  makeStyles,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import SupervisorAccountTwoToneIcon from "@material-ui/icons/SupervisorAccountTwoTone";
import PersonOutlineTwoToneIcon from "@material-ui/icons/PersonOutlineTwoTone";
import MenuOpenTwoToneIcon from "@material-ui/icons/MenuOpenTwoTone";
import ListAltTwoToneIcon from "@material-ui/icons/ListAltTwoTone";
import AccountTreeTwoToneIcon from "@material-ui/icons/AccountTreeTwoTone";
import ReceiptTwoToneIcon from "@material-ui/icons/ReceiptTwoTone";
import MenuTwoToneIcon from "@material-ui/icons/MenuTwoTone";
import FileUploadComponent from "../fileUpload/fileUpload";
import ProductsComponent from "../products/products";
import CategoriesComponent from "../categories/categories";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  leftListActive: {
    backgroundColor: "#E7E7E7",
  },
  iconButon: {
    padding: "8px",
    position: "absolute",
    width: "40px",
    height: "40px",
    bottom: "15px",
    left: "15px",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    // zIndex: "-1",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: 80,
  },
}));

const DashboardPresentation = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: props.open,
          [classes.drawerClose]: !props.open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: props.open,
            [classes.drawerClose]: !props.open,
          }),
        }}
      >
        <div className={classes.toolbar}></div>
        <List style={{ marginTop: "16px" }}>
          {[
            { name: "Products", id: 0 },
            { name: "Categories", id: 1 },
            { name: "Orders", id: 2 },
            { name: "User Management", id: 3 },
            { name: "Profile", id: 4 },
          ].map((text) => (
            <div
              key={text.id}
              className={
                text.id === props.activeId ? classes.leftListActive : null
              }
            >
              <ListItem
                style={{ padding: "24px 28px" }}
                button
                key={text.id}
                onClick={() => props.changeActiveState(text.id)}
              >
                <ListItemIcon>
                  {text.id === 0 ? (
                    <ListAltTwoToneIcon />
                  ) : text.id === 1 ? (
                    <AccountTreeTwoToneIcon />
                  ) : text.id === 2 ? (
                    <ReceiptTwoToneIcon />
                  ) : text.id === 3 ? (
                    <SupervisorAccountTwoToneIcon />
                  ) : (
                    <PersonOutlineTwoToneIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItem>
            </div>
          ))}
        </List>
        <MenuOpenTwoToneIcon
          className={clsx(classes.iconButon, {
            [classes.hide]: !props.open,
          })}
          onClick={() => props.handleDrawerClose()}
        />
        <MenuTwoToneIcon
          className={clsx(classes.iconButon, {
            [classes.hide]: props.open,
          })}
          onClick={() => props.handleDrawerOpen()}
        />
      </Drawer>
      <main className={classes.content}>
        {props.activeId === 2 ? (
          <FileUploadComponent />
        ) : props.activeId === 0 ? (
          <ProductsComponent setAuthentication={props.setAuthentication} />
        ) : props.activeId === 1 ? (
          <CategoriesComponent setAuthentication={props.setAuthentication} />
        ) : null}
      </main>
    </div>
  );
};
export default DashboardPresentation;
