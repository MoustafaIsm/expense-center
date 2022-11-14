import { adminInstance } from '../axios';
import { useQuery } from '@tanstack/react-query';

export const getFeedbacks = () => {
    return adminInstance.get('/feedback/get_feedbacks').then(res => res.data.feedbacks);
}

export const useFeedbacks = () => useQuery({
    refetchOnWindowFocus: false,
    queryKey: ['FEEDBACKS'],
    queryFn: () => getFeedbacks(),
    placeholderData: [],
    onSuccess: (data) => {
        console.log(data);
    }
})