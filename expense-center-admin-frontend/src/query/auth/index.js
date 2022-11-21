import { authInstance } from '../axios';

export const login = async (data) => {
    return await authInstance.post('/login', data);
}
