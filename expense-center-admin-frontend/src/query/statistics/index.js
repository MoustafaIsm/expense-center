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

export const getOutcomes = () => {
    return adminInstance.get('/statistics/get_outcomes').then(res => res.data.outcomes);
}

export const getSavings = () => {
    return adminInstance.get('/statistics/get_savings').then(res => res.data.savings);
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

export const useOutcomes = () => useQuery({
    refetchOnWindowFocus: false,
    queryKey: ['OUTCOMES'],
    queryFn: () => getOutcomes(),
    placeholderData: [],
})

export const useSavings = () => useQuery({
    refetchOnWindowFocus: false,
    queryKey: ['SAVINGS'],
    queryFn: () => getSavings(),
    placeholderData: [],
})