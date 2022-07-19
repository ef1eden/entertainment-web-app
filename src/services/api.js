import axios from 'axios';

export default() => {
    return axios.create({
        baseURL: 'https://mocki.io',
        withCredentials: false,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    });
}