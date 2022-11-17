import Layout from "../components/layouts/Layout";
import { FEEDBACK } from '../utilities/constants';
import FeedbackCard from '../components/feedback/FeedbackCard';
import { useFeedbacks } from '../query/feedbacks';
import { useInView } from 'react-intersection-observer';
import { useEffect, Fragment } from 'react';
import { CircularProgress } from '@mui/material'

function Feedback() {

    const { ref, inView } = useInView();

    const { status, data, isFetchingNextPage, fetchNextPage, hasNextPage } = useFeedbacks();

    useEffect(() => {
        if (inView) { fetchNextPage(); }
    }, [fetchNextPage, inView])

    return (
        <Layout title={FEEDBACK}>
            <div className="grid grid-cols-1 gap-9 lg:grid-cols-2">
                {
                    status === 'loading' ? (<CircularProgress />) : (
                        <>
                            {data.pages.map((page, i) => (
                                <Fragment key={i}>{
                                    page.map((feedback) => (
                                        <FeedbackCard key={feedback.id} feedback={feedback} />
                                    ))
                                }</Fragment>
                            ))}
                            <button ref={ref} onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
                                {isFetchingNextPage ? <CircularProgress /> : hasNextPage ? 'Load More' : 'Nothing more to load'}
                            </button>
                        </>
                    )
                }
            </div>
        </Layout>
    )
}

export default Feedback