import axios from 'axios';

const api = axios.create({
  baseURL: 'IP_OF_YOUR_MACHINE:3333',
});

export default api