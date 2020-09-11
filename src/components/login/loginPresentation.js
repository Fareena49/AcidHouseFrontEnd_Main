import React from "react";
import { Container, TextField, Button } from "@material-ui/core";
import "./login.css";
const LoginPresentation = (props) => {
  return (
    <Container className="container" component="main" maxWidth="xs">
      <div className="paper">
        <TextField
          value={props.email}
          onChange={(e) => props.setEmail(e.target.value)}
          fullWidth
          variant="outlined"
          margin="normal"
          label="Email Address"
          autoFocus
          required
        />
        <TextField
          value={props.password}
          onChange={(e) => props.setPassword(e.target.value)}
          variant="outlined"
          fullWidth
          label="Password"
          type="password"
        />
      </div>
      <Button
        onClick={() => props.toConsole()}
        type="submit"
        fullWidth
        variant="contained"
        className="logInButton"
      >
        Sign In
      </Button>
    </Container>
  );
};

export default LoginPresentation;
