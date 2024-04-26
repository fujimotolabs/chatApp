import axios from 'axios';
const instance = axios.create();

instance.interceptors.request.use(
  (config) => {
    config.headers.common['access-token'] = localStorage.getItem('access-token');
    config.headers.common['client'] = localStorage.getItem('client');
    config.headers.common['uid'] = localStorage.getItem('uid');
    return config;
  }
);

export default instance; 