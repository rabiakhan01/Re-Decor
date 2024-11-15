// Library Imports
import { Route, Routes } from "react-router-dom";

// Local Imports
import PublicRoutes from "./PublicRoutes";
import HomePage from "../pages/HomePage";
import { protectedRoutes, publicRoutes } from "./Config"
import ProtectedRoutes from "./ProtectedRoutes";
import Layout from "../components/shared/Layout";
import ContactUS from "../components/HomePage/ContactUS";
import Gallery from "../pages/Gallery";
import AI from "../pages/AI";
import About from "../pages/About";
import ForgetPassword from "../pages/ForgetPassword";

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Layout><HomePage /></Layout>} />
            <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
            <Route path="/contact-us" element={<Layout><ContactUS /></Layout>} />
            <Route path="/AI" element={<Layout><AI /></Layout>} />
            <Route path="/about" element={<Layout><About /></Layout>} />
            <Route path="/verify-email" element={<ForgetPassword />} />
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