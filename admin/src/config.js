import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://netflix-admin.herokuapp.com/api/',
});
