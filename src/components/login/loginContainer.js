import React, { useState } from "react";
import LoginPresentation from "./loginPresentation";
import { useHistory } from "react-router-dom";
import { adminLogin } from "../../modules/apiService";
const LoginContainer = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  // history.push("/console");
  // props.onLogin();
  const makeLogin = () => {
    adminLogin({ email: email, password: password }).then((res) => {
      console.log(res);
      props.onLogin(res.data.token);
      history.push("/console");
    });
    // history.push("/console");
    // props.onLogin();
  };
  return (
    <LoginPresentation
      email={email}
      password={password}
      toConsole={makeLogin}
      setEmail={(val) => setEmail(val)}
      setPassword={(val) => setPassword(val)}
    />
  );
};

export default LoginContainer;
