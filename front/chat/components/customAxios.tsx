import axios from 'axios'; // Axios本体をインポート

const instance = axios.create(); // Axiosインスタンスを生成

instance.interceptors.request.use(
  (config) => {
    // 認証トークンをヘッダーに付与
    config.headers.common['access-token'] = localStorage.getItem('access-token');
    config.headers.common['client'] = localStorage.getItem('client');
    config.headers.common['uid'] = localStorage.getItem('uid');
    return config;
  }
);

export default instance; 