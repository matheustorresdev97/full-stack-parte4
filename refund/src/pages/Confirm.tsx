import { Navigate, useLocation } from "react-router";

export function Confirm() {
  const location = useLocation();

  if (!location.state?.fromSubmit) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>C</h1>
    </div>
  );
}
