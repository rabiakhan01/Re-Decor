import LoginPage from "../pages/LoginPage";
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
]

export const protectedRoutes = [
    {
        path: '/profile',
        element: <ProfilePage />
    },

]