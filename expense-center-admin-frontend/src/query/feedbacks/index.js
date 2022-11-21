import { adminInstance } from '../axios';
import { useInfiniteQuery } from '@tanstack/react-query';
import { handleError } from '../../utilities/functions';

export const getFeedbacksTest = async (pageParam) => {
    const result = await adminInstance.get(`/feedback/get_feedbacks/10/${pageParam}`);
    return result.data.feedbacks;
}

export const useFeedbacks = () => useInfiniteQuery({
    refetchOnWindowFocus: false,
    queryKey: ['FEEDBACKS'],
    queryFn: ({ pageParam }) => getFeedbacksTest(pageParam),
    getNextPageParam: (lastPage) => { return lastPage.length < 10 ? undefined : lastPage[lastPage.length - 1].id + 1 },
    onError: (error) => handleError(error)
})