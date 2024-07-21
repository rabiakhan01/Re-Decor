import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import HomePage from "../pages/HomePage";
import { protectedRoutes, publicRoutes } from "./Config"
import ProtectedRoutes from "./ProtectedRoutes";
import Layout from "../components/shared/Layout";

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Layout><HomePage /></Layout>} />
            <Route element={<PublicRoutes />}>
                {
                    publicRoutes.map((route, index) => {
                        return <Route key={index} path={route.path} element={route.element} />
                    })
                }
            </Route>
            <Route element={<ProtectedRoutes />}>
                {
                    protectedRoutes.map((route, index) => {
                        return <Route key={index} path={route.path} element={route.element} />
                    })
                }
            </Route>
        </Routes>
    )
}