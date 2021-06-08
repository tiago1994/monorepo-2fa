import React, { useState } from "react";
import TwoFactorAuth from "../../pages/2fa/index";
import { twoFactorAuth } from "../../services/twoFactor";

export default () => {
  const [code, setCode] = useState(null);
  const checkTwoFactory = async () => {
    const check = await twoFactorAuth(code);
    console.log("check", check);
  };

  return (
    <TwoFactorAuth action={() => checkTwoFactory()} code={(c) => setCode(c)} />
  );
};
