
const baseURL = process.env.REACT_APP_API_ENDPOINT;
export const endPoints = {
    baseURL: baseURL,
    login: `${baseURL}/auth/login`,
    singup: `${baseURL}/auth/signup`,
    verifyEmail: `${baseURL}/auth/verify-email`,
    verifyOTP: `${baseURL}/auth/verify-otp`,
    forgetPassword: `${baseURL}/auth/forget-password`
}