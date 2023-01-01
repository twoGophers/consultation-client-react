import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://consultation-server-react.vercel.app/',
});

export default instance ;
