import { adminInstance } from '../axios';
import { useQuery } from '@tanstack/react-query';

export const getMostClickedUsers = () => {
    return adminInstance.get('/statistics/get_most_clicked_users').then(res => res.data.users);
}

export const getMostFavoritedUsers = () => {
    return adminInstance.get('/statistics/get_most_favorited_users').then(res => res.data.users);
}

export const getIncomes = () => {
    return adminInstance.get('/statistics/get_incomes').then(res => res.data.incomes);
}

export const useMostClickedUsers = () => useQuery({
    refetchOnWindowFocus: false,
    queryKey: ['MOST_CLICKED_USERS'],
    queryFn: () => getMostClickedUsers(),
    placeholderData: [],
})

export const useMostFavoritedUsers = () => useQuery({
    refetchOnWindowFocus: false,
    queryKey: ['MOST_FAVORITED_USERS'],
    queryFn: () => getMostFavoritedUsers(),
    placeholderData: [],
})

export const useIncomes = () => useQuery({
    refetchOnWindowFocus: false,
    queryKey: ['INCOMES'],
    queryFn: () => getIncomes(),
    placeholderData: [],
})