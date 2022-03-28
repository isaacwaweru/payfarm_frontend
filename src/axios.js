import axios from 'axios'

axios.defaults.baseURL = 'https://payfarm.herokuapp.com/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');