import { axios } from 'axios';
import { HEADERS } from '../../utilities/constants';

export const adminInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/admin',
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        ...HEADERS
    }
});

export const authInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/auth',
    headers: { ...HEADERS }
});