import React from "react";
import resources from "../../commons/resources";
import Dashboard from "../../pages/dashboard/index";
import { getUser } from "../../services/auth";
import { logout } from "../../services/user";

const DashBoardContainer = (props) => {
  const logoutUser = () => {
    logout();
    props.history.push("/login");
  };

  return (
    <Dashboard
      user={getUser()}
      github={"https://github.com/tiago1994/monorepo-2fa"}
      monorepo={resources.monorepo}
      backend={resources.backend}
      frontend={resources.frontend}
      message={resources.message}
      logout={() => logoutUser()}
    />
  );
};

export default DashBoardContainer;
