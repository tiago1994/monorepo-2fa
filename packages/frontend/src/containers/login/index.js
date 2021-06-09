import React, { useState } from "react";
import Login from "../../pages/login/index";
import { login } from "../../services/user";

const LoginContainer = (props) => {
  const [data, setData] = useState({
    email: null,
    password: null,
    error: false,
    required: false,
  });

  const makeLogin = async () => {
    if (!data.email || !data.password) {
      setData({ ...data, error: false, required: true });
      return;
    }

    const user = {
      email: data.email,
      password: data.password,
    };

    try {
      const loginResponse = await login(user);
      setData({ ...data, error: false, required: false });
      localStorage.setItem(
        "USER",
        JSON.stringify({
          email: loginResponse.data.email,
          name: loginResponse.data.name,
        })
      );
      localStorage.setItem("TOKEN_KEY", loginResponse.data.jwt);
      props.history.push("/2fa");
    } catch (error) {
      setData({ ...data, error: true, required: false });
    }
  };

  return (
    <Login
      action={() => makeLogin()}
      email={(e) => setData({ ...data, email: e })}
      password={(e) => setData({ ...data, password: e })}
      error={data.error}
      required={data.required}
    />
  );
};

export default LoginContainer;