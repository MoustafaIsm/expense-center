import axios from 'axios';
import { HEADERS, BASE_URL } from '../../utilities/constants';

export const adminInstance = axios.create({
    baseURL: `${BASE_URL}/admin`,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        ...HEADERS
    }
});

export const authInstance = axios.create({
    baseURL: `${BASE_URL}/auth`,
    headers: { ...HEADERS }
});