import React, { useState } from "react";
import TwoFactorAuth from "../../pages/2fa/index";
import { twoFactorAuth } from "../../services/twoFactor";

export default (props) => {
  const [code, setCode] = useState(null);
  const [data, setData] = useState({
    error: false, 
    required: false
  })

  const checkTwoFactory = async () => {
    if(code){
      const check = await twoFactorAuth(code);
      if(check.data.email){
        setData({...code, error: false, required: false})
        props.history.push("/dashboard");
      }else{
        setData({...code, error: true, required: false})
      }
    }else{
      setData({...code, error: false, required: true})
    }
  };

  return (
    <TwoFactorAuth action={() => checkTwoFactory()} code={(c) => setCode(c)} error={data.error} required={data.required} />
  );
};
