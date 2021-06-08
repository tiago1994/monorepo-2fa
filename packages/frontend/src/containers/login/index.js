import React, { useState } from "react";
import Login from "../../pages/login/index";
import { login } from "../../services/user";

export default (props) => {
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

    const loginResponse = await login(user);
    if (loginResponse.data.email) {
      setData({ ...data, error: false, required: false });
      localStorage.setItem("user", {
        email: loginResponse.data.email,
        name: loginResponse.data.name,
        jwt: loginResponse.data.jwt,
      });
      props.history.push("/2fa");
    } else {
      console.log("nao foi");
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
