import * as React from "react";
import LoginForm from "../components/form/loginForm";
import { Heading } from "../components/tags/heading";

const Login = () => {
  return (
    <div>
      <Heading element="h1">Get them while they'hot!</Heading>

      <LoginForm />
    </div>
  );
};

export default Login;
