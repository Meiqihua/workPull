import axios from 'axios';

const request = axios.create({
    baseURL: '/',//VUE_APP_BASE_URL
    timeout: 5000
})

export default request;