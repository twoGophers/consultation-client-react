import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000' || 'https://consultation-server-react.vercel.app',
});

export default instance ;
