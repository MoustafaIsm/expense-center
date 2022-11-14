import { authInstance } from './axios';
import { useQuery } from '@tanstack/react-query';

export const login = (email, password) => {
    return authInstance.post('/login', { email, password }).then((res) => res.user);
}

export const useLogin = ({ email, password }) => useQuery({
    refetchOnWindowFocus: false,
    queryFn: () => login(email, password),
    queryKey: 'login',
})
