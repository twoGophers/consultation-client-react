import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://consultation-server-react.vercel.app/',
  // baseURL: 'http://localhost:5000/',
});

export default instance ;
