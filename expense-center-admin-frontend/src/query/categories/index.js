import { adminInstance } from '../axios';
import { useQuery } from '@tanstack/react-query';
import { handleError } from '../../utilities/functions';

export const getCategories = () => {
    return adminInstance.get('/categories/get_categories')
        .then(res => res.data.categories)
        .catch(error => handleError(error.response));
}

export const addCategory = async (data) => {
    return await adminInstance.post('/categories/add_category', data);
}

export const useCategories = () => useQuery({
    fetchOnWindowFocus: false,
    queryKey: ['ALL_CATEGORIES'],
    queryFn: () => getCategories(),
    placeholderData: [],
})