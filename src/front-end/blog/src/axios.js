import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/api/';

const axiosIntance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        Authorization: localStorage.getItem('access-token')
            ? 'JWT' + localStorage.getItem('access-token')
            : null,
        'Content-Type': 'application/json',
        accept: 'application/json',
    },
});