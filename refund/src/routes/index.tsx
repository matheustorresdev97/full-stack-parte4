import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./auth.routes";
import { EmployeeRoutes } from "./employee.routes";
import { ManagerRoutes } from "./manager.routes";

import { Loading } from "../components/Loading";

const isLoading = false;

const session = {
  user: {
    role: "manager",
  },
};

export function Routes() {
  function Route() {
    switch (session?.user.role) {
      case "employee":
        return <EmployeeRoutes />;
      case "manager":
        return <ManagerRoutes />;
      default:
        return <AuthRoutes />;
    }
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  );
}
