import React from "react";
import {
  AppBar,
  Toolbar,
  Avatar,
  Typography,
  Popover,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import Logo from "../../Logo.jpg";
import "./header.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
const HeaderPresentation = (props) => {
  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="fixed" className="header-styles">
        <Toolbar>
          <Typography
            style={{ flexGrow: 1, textAlign: "left", padding: "12px" }}
          >
            <img height="40" src={Logo} alt="logo" />
          </Typography>
          {props.authenticated ? (
            <>
              {" "}
              <Avatar
                aria-describedby={props.id}
                onClick={(e) => props.handlePopClick(e.currentTarget)}
                className="avtStyles"
              >
                {"FM"}
              </Avatar>
              <Popover
                className="popStyling"
                id={props.id}
                open={props.open}
                anchorEl={props.anchorEl}
                onClose={() => props.handlePopClose()}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <List>
                  <ListItem className="changePass">
                    <ListItemText>Change Password</ListItemText>
                  </ListItem>
                  <ListItem
                    className="logOut"
                    onClick={() => props.handleLogout()}
                  >
                    <ExitToAppIcon />
                    <ListItemText>LogOut</ListItemText>
                  </ListItem>
                </List>
              </Popover>
            </>
          ) : null}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderPresentation;
