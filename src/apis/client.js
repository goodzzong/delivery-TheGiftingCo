import axios from 'axios';

const SERVER_URL = 'http://info.sweettracker.co.kr/';

const apiClient = axios.create({
	baseURL: SERVER_URL
});

export {
	apiClient
}
