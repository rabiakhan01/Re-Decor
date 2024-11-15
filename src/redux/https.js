// Library Imports
import axios from 'axios';

// Local Imports
import { endPoints } from './constants';

const axiosInstance = axios.create({
    baseURL: endPoints?.baseURL,
});

export const setAuthToken = (token) => {
    if (token) {
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axiosInstance.defaults.headers.common['Authorization'];
    }

    // Response Interceptor
    axiosInstance.interceptors.response.use(
        function (config) {
            return config;
        },
        function (error) {
            console.log('error from https', error)
            if (!navigator.onLine) {
                console.log('No internet connection');
            }
            return Promise.reject(error);
        }
    );
};

export default axiosInstance;