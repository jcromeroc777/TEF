import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3002/api/v1/rest',
});

const instanceWithToken = (token) =>
  axios.create({
    baseURL: 'http://localhost:3002/api/v1/rest',
    headers: { Authorization: `Bearer ${token}` },
  });

export { instance, instanceWithToken };
