import axios from 'axios';

// let token = localStorage.getItem("token");
const api = axios.create({
  baseURL: 'https://gst-demo.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export { api };
