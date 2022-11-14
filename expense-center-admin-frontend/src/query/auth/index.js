import { authInstance } from '../axios';
import { queryClient } from '../../index';

export const login = async (data) => {
    return await authInstance.post('/login', data);
}

export const useLogin = ({ payload }) => queryClient.setMutationDefaults(['LOGIN'], {
    mutationFn: () => authInstance.post('/login', { ...payload }).then((res) => res.user).catch(err => err),
    onSuccess: (data) => {
        localStorage.setItem('token', data.token);
    },
    onError: (error) => {
        console.log(error);
    }
})
