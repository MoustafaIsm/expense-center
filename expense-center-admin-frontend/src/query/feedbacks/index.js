import { adminInstance } from '../axios';
import { useInfiniteQuery } from '@tanstack/react-query';
import { handleError } from '../../utilities/functions';

let offset = 0;

export const getFeedbacksTest = async (limit, offset) => {
    const result = await adminInstance.get(`/feedback/get_feedbacks/${limit}/${offset}`);
    return result.data.feedbacks;
}

export const useFeedbacks = () => useInfiniteQuery({
    refetchOnWindowFocus: false,
    queryKey: ['FEEDBACKS'],
    queryFn: () => getFeedbacksTest(10, offset),
    getNextPageParam: (lastPage) => { return lastPage.length < 10 ? undefined : lastPage[lastPage.length - 1].id + 1 },
    onSuccess: (data) => { offset += 10 },
    onError: (error) => { handleError(error) }
})