import { useAuth } from "context";
import React from "react";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children, path }) {
  const {
    userAuthState: { isLoggedIn },
  } = useAuth();

  return isLoggedIn ? (
    children
  ) : (
    <Navigate replace to="/login" state={{ previousPath: `${path}` }} />
  );
}
