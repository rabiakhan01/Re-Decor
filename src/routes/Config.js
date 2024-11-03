import Layout from "../components/shared/Layout";
import About from "../pages/About";
import AI from "../pages/AI";
import Blog from "../pages/Blog";
import ContactUs from "../pages/ContactUS";
import ForgetPassword from "../pages/ForgetPassword";
import Gallery from "../pages/Gallery";
import LoginPage from "../pages/LoginPage";
import PricePlan from "../pages/PricePlan";
import ProfilePage from "../pages/ProfilePage";
import SignupPage from "../pages/SignupPage";

export const publicRoutes = [
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
        path: '/blog',
        element: <Layout><Blog /></Layout>
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
        path: '/price-plan',
        element: <Layout><PricePlan /></Layout>
    },
    {
        path: '/forget-password',
        element: <ForgetPassword />
    },
]

export const protectedRoutes = [
    {
        path: '/profile',
        element: <Layout><ProfilePage /></Layout>
    },

]