import axios from 'axios';

const api = axios.create({
    baseURL: 'https://week6-back.herokuapp.com'
});

export default api;