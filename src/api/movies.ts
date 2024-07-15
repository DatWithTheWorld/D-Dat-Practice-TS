import axios from 'axios';


const host = 'https://amv-15rl.onrender.com/';

export default axios.create({
  baseURL: host,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  },
});
