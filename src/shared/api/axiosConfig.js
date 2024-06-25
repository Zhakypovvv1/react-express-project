import axios from 'axios';

const config = {
  baseURL: 'http://localhost:5252/', // Укажите ваш базовый URL
  headers: {
    'Content-Type': 'application/json',
  },
};

export const axiosNoAuthInstance = axios.create(config);
export const axiosInstance = axios.create(config);

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
