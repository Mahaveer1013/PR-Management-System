import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pr-management-system.vercel.app',
    withCredentials: true, // Send cookies with requests
});

// Axios interceptor to handle token expiration
api.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;
        console.log(error);

        // Check if error response is due to expired access token
        if (error.response.status === 401 || error.response.status === 403) {
            // Attempt to refresh access token
            try {
                const response = await api.post('/auth/refreshToken');
                const newAccessToken = response.data.accessToken;

                // Update the access token in Axios defaults and retry original request
                api.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
                originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                return api(originalRequest);
            } catch (refreshError) {
                console.error('Refresh token failed:', refreshError);
                // Handle refresh token failure (e.g., redirect to login)
                window.location.href = '/';
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default api;
