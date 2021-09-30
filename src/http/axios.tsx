import axios from 'axios';

const $host = axios.create({
	// eslint-disable-next-line
    baseURL: process.env.REACT_APP_DOMAIN_SERVER,
	responseType: 'json',
});

export default $host;
