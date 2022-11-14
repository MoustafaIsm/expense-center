import { useQuery } from '@tanstack/react-query';
import { adminInstance } from '../axios';

export const getBannedUsers = () => {
    return adminInstance.get('/users/get_banned_users').then(res => res.data.users);
}


export const useBannedUsers = () => useQuery({
    refetchOnWindowFocus: false,
    queryKey: ['BANNED_USERS'],
    queryFn: () => getBannedUsers(),
})

