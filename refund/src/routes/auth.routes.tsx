import { Route, Routes } from "react-router";
import { AuthLayout } from "../layout/AuthLayout";
import { SignIn } from "../pages/SigIn";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<SignIn />} />
      </Route>
    </Routes>
  );
}
