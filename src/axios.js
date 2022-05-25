import axios from 'axios'

axios.defaults.baseURL = 'https://payfarm.herokuapp.com/';
// axios.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('token');

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    const token = 'Bearer '+localStorage.getItem('token');
    config.headers.Authorization =  token;

    return config;
});
