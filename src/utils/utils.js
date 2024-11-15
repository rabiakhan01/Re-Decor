import { useSelector } from "react-redux";
import { setAuthToken } from "../redux/https";

export const useIsAuthentication = () => {
    const currentUser = useSelector((state) => state?.user?.currentUser);
    const token = currentUser?.accessToken;
    if (!token) {
        return false
    }
    else {
        setAuthToken(token)
        return true
    }
}