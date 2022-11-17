import { useQuery } from '@tanstack/react-query';
import { adminInstance } from '../axios';
import { handleError } from '../../utilities/functions';

export const getBannedUsers = () => {
    return adminInstance.get('/users/get_banned_users')
        .then(res => res.data.users)
        .catch(error => handleError(error.response, false));
}

export const getNotBannedUsers = () => {
    return adminInstance.get('/users/get_not_banned_users')
        .then(res => res.data.users)
        .catch(error => handleError(error.response, false));
}

export const getUserById = (id) => {
    return adminInstance.get(`/users/get_user/${id}`)
        .catch(error => handleError(error.response, false));
}

export const useBannedUsers = () => useQuery({
    refetchOnWindowFocus: false,
    queryKey: ['BANNED_USERS'],
    queryFn: () => getBannedUsers(),
    placeholderData: [],
})

export const useNotBannedUsers = () => useQuery({
    refetchOnWindowFocus: false,
    queryKey: ['NOT_BANNED_USERS'],
    queryFn: () => getNotBannedUsers(),
    placeholderData: [],
})

export const useUserById = (id) => useQuery({
    refetchOnWindowFocus: false,
    queryKey: ['USER_BY_ID', id],
    queryFn: () => getUserById(id),
})