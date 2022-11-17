import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { adminInstance } from '../axios';
import { handleError } from '../../utilities/functions';

export const getBannedUsers = async (pageParam) => {
    const result = await adminInstance.get(`/users/get_banned_users/10/${pageParam}`)
        .catch((error) => {
            handleError(error, false)
        });
    return result.data.users;
}

export const getNotBannedUsers = async (pageParam) => {
    const result = await adminInstance.get(`/users/get_not_banned_users/10/${pageParam}`)
        .catch((error) => {
            handleError(error, false)
        });
    return result.data.users;
}

export const getUserById = (id) => {
    return adminInstance.get(`/users/get_user/${id}`)
        .catch(error => handleError(error.response, false));
}

export const useBannedUsers = () => useInfiniteQuery({
    refetchOnWindowFocus: false,
    queryKey: ['BANNED_USERS'],
    queryFn: ({ pageParam }) => getBannedUsers(pageParam),
    getNextPageParam: (lastPage, pages) => { return lastPage.length < 10 ? undefined : pages.length * 10 },
})

export const useNotBannedUsers = () => useInfiniteQuery({
    refetchOnWindowFocus: false,
    queryKey: ['NOT_BANNED_USERS'],
    queryFn: ({ pageParam }) => getNotBannedUsers(pageParam),
    getNextPageParam: (lastPage, pages) => { return lastPage.length < 10 ? undefined : pages.length * 10 },
})

export const useUserById = (id) => useQuery({
    refetchOnWindowFocus: false,
    queryKey: ['USER_BY_ID', id],
    queryFn: () => getUserById(id),
})