import { adminInstance } from '../axios';
import { useQuery } from '@tanstack/react-query'

export const getCategories = () => {
    return adminInstance.get('/categories/get_categories').then(res => res.data.categories);
}

export const useCategories = () => useQuery({
    fetchOnWindowFocus: false,
    queryKey: ['ALL_CATEGORIES'],
    queryFn: () => getCategories(),
    placeholderData: [],
})