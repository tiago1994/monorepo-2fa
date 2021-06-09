import React, { useState } from "react";
import TwoFactorAuth from "../../pages/2fa/index";
import { twoFactorAuth } from "../../services/twoFactor";

const TwoFactorContainer = (props) => {
  const [code, setCode] = useState(null);
  const [data, setData] = useState({
    error: false,
    required: false,
  });

  const checkTwoFactory = async () => {
    if (!code) {
      return setData({ ...code, error: false, required: true });
    }

    try {
      const twoFactorReturn = await twoFactorAuth(code);
      localStorage.setItem("TOKEN_KEY", twoFactorReturn.data.jwt);
      setData({ ...code, error: false, required: false });
      props.history.push("/dashboard");
    } catch (error) {
      return setData({ ...code, error: true, required: false });
    }
  };

  return (
    <TwoFactorAuth
      action={() => checkTwoFactory()}
      code={(c) => setCode(c)}
      error={data.error}
      required={data.required}
    />
  );
};

export default TwoFactorContainer;
