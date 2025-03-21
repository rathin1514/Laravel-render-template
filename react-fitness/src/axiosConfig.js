import axios from 'axios';

const baseURL = `${process.env.REACT_APP_API_URL}/api`;

export default axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});
