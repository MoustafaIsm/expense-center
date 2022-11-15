import { adminInstance } from '../axios';
import { useQuery } from '@tanstack/react-query';
import { handleError } from '../../utilities/functions';

export const getMostClickedUsers = () => {
    return adminInstance.get('/statistics/get_most_clicked_users')
        .then(res => res.data.users)
        .catch(error => handleError(error.response));
}

export const getMostFavoritedUsers = () => {
    return adminInstance.get('/statistics/get_most_favorited_users')
        .then(res => res.data.users)
        .catch(error => handleError(error.response));
}

export const getIncomes = () => {
    return adminInstance.get('/statistics/get_incomes')
        .then(res => res.data.incomes)
        .catch(error => handleError(error.response));
}

export const getOutcomes = () => {
    return adminInstance.get('/statistics/get_outcomes')
        .then(res => res.data.outcomes)
        .catch(error => handleError(error.response));
}

export const getSavings = () => {
    return adminInstance.get('/statistics/get_savings')
        .then(res => res.data.savings)
        .catch(error => handleError(error.response));
}

export const reset = async (data) => {
    try {
        return await adminInstance.post('/reset', data);
    } catch (error) {
        return handleError(error.response);
    }
}

export const useMostClickedUsers = () => useQuery({
    refetchOnWindowFocus: false,
    queryKey: ['MOST_CLICKED_USERS'],
    queryFn: () => getMostClickedUsers(),
    placeholderData: [],
    select: data => {
        return {
            type: 'bar',
            title: 'Most clicked users',
            label: 'Clicks',
            labels: data.map(user => user.username),
            dataset: data.map(user => user.nbr_of_clicks),
        };
    }
})

export const useMostFavoritedUsers = () => useQuery({
    refetchOnWindowFocus: false,
    queryKey: ['MOST_FAVORITED_USERS'],
    queryFn: () => getMostFavoritedUsers(),
    placeholderData: [],
    select: data => {
        return {
            type: 'bar',
            title: 'Most favorited users',
            label: 'Favorites',
            labels: data.map(user => user.favorited_info.username),
            dataset: data.map(user => user.total),
        };
    }
})

export const useIncomes = () => useQuery({
    refetchOnWindowFocus: false,
    queryKey: ['INCOMES'],
    queryFn: () => getIncomes(),
    placeholderData: [],
    select: data => {
        return {
            type: 'line',
            title: 'Incomes',
            label: '$',
            labels: data.map(income => income.month + '-' + income.year),
            dataset: data.map(income => income.total),
        };
    }
})

export const useOutcomes = () => useQuery({
    refetchOnWindowFocus: false,
    queryKey: ['OUTCOMES'],
    queryFn: () => getOutcomes(),
    placeholderData: [],
    select: data => {
        return {
            type: 'line',
            title: 'Outcomes',
            label: '$',
            labels: data.map(outcome => outcome.month + '-' + outcome.year),
            dataset: data.map(outcome => outcome.total),
        };
    }
})

export const useSavings = () => useQuery({
    refetchOnWindowFocus: false,
    queryKey: ['SAVINGS'],
    queryFn: () => getSavings(),
    placeholderData: [],
    select: data => {
        return {
            type: 'line',
            title: 'Savings',
            label: '$',
            labels: data.map(saving => saving.month + '-' + saving.year),
            dataset: data.map(saving => saving.total),
        };
    }
})