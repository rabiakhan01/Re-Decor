import React from "react";
import { isAuthentication } from "../utils/utils";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
    return (
        <React.Fragment>
            {
                isAuthentication() ? <Outlet /> : <Navigate to="/login" />
            }
        </React.Fragment>
    )
}

export default ProtectedRoutes;