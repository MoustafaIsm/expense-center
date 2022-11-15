import { adminInstance } from '../axios';
import { useQuery } from '@tanstack/react-query';
import { handleError } from '../../utilities/functions';

export const getFeedbacks = () => {
    return adminInstance.get('/feedback/get_feedbacks')
        .then(res => res.data.feedbacks)
        .catch(error => handleError(error.response));
}

export const useFeedbacks = () => useQuery({
    refetchOnWindowFocus: false,
    queryKey: ['FEEDBACKS'],
    queryFn: () => getFeedbacks(),
    placeholderData: [],
})