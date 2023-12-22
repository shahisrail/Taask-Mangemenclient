


import axios from 'axios';

const publicApi = axios.create({
  baseURL: 'https://task-manegment-server-pi.vercel.app',
});

const UseAxiosPublic = () => {
  return publicApi;
};

export default UseAxiosPublic;
