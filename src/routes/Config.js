import Layout from "../components/shared/Layout";
import About from "../pages/About";
import AI from "../pages/AI";
import ContactUs from "../pages/ContactUS";
import ForgetPassword from "../pages/ForgetPassword";
import Gallery from "../pages/Gallery";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import SignupPage from "../pages/SignupPage";

export const publicRoutes = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/signup',
        element: <SignupPage />
    },
    {
        path: '/contact-us',
        element: <Layout><ContactUs /></Layout>
    },
    {
        path: '/gallery',
        element: <Layout><Gallery /></Layout>
    },
    {
        path: '/AI',
        element: <Layout><AI /></Layout>
    },
    {
        path: '/about',
        element: <Layout><About /></Layout>
    },
    {
        path: '/forget-password',
        element: <ForgetPassword />
    },
    {
        path: '/verify-email',
        element: <ForgetPassword />
    },
]

export const protectedRoutes = [
    {
        path: '/profile',
        element: <Layout><ProfilePage /></Layout>
    },

]