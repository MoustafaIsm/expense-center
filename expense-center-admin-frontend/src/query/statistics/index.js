import { adminInstance } from '../axios';
import { useQuery } from '@tanstack/react-query';

export const getMostClickedUsers = () => {
    return adminInstance.get('/statistics/get_most_clicked_users').then(res => res.data.users);
}

export const useMostClickedUsers = () => useQuery({
    refetchOnWindowFocus: false,
    queryKey: ['MOST_CLICKED_USERS'],
    queryFn: () => getMostClickedUsers(),
    placeholderData: [],
})