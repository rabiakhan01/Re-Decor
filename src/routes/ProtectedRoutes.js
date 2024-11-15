import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useIsAuthentication } from "../utils/utils";

const ProtectedRoutes = () => {
    return (
        <React.Fragment>
            {
                useIsAuthentication() ? <Outlet /> : <Navigate to="/login" />
            }
        </React.Fragment>
    )
}

export default ProtectedRoutes;