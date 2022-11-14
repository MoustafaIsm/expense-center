import { useQuery } from '@tanstack/react-query';
import { adminInstance } from '../axios';

export const getBannedUsers = () => {
    return adminInstance.get('/users/get_banned_users').then(res => res.data.users);
}

export const getNotBannedUsers = () => {
    return adminInstance.get('/users/get_not_banned_users');
}

export const getUserById = (id) => {
    return adminInstance.get(`/users/get_user/${id}`);
}

export const useBannedUsers = () => useQuery({
    refetchOnWindowFocus: false,
    queryKey: ['BANNED_USERS'],
    queryFn: () => getBannedUsers(),
})

export const useUserById = (id) => useQuery({
    refetchOnWindowFocus: false,
    queryKey: ['USER_BY_ID', id],
    queryFn: () => getUserById(id),
})