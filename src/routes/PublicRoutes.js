import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useIsAuthentication } from "../utils/utils";

const PublicRoutes = () => {
    return (
        <React.Fragment>
            {
                useIsAuthentication() ? <Navigate to="/" /> : <Outlet />
            }
        </React.Fragment>
    )
}

export default PublicRoutes;