import axios from 'axios';

const BASE_URL = 'https://localhost:44397/';

const axiosApi = axios.create({
  baseURL: BASE_URL,
});

axiosApi.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
  return config;
});

export { BASE_URL, axiosApi };