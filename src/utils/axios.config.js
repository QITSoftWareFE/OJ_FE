import axios from "axios";

// To configure timeout.
axios.defaults.timeout = 5000;

// To configure CORS.
axios.defaults.withCredentials = true;

// To configure Content-Type header
axios.defaults.headers.post['Content-Type'] = 'application/w-x-www-form-urlencoded;charset=utf-8';

// To configure baseURL
axios.defaults.baseURL = "http://localhost:5500";