import Layout from "../components/layouts/Layout";
import { FEEDBACK } from '../utilities/constants';
import FeedbackCard from '../components/feedback/FeedbackCard';
import { useFeedbacks } from '../query/feedbacks';

function Feedback() {

    const { data: feedbacks } = useFeedbacks();

    return (
        <Layout title={FEEDBACK}>
            <div className="grid grid-cols-1 gap-9 lg:grid-cols-2">
                {
                    feedbacks?.map((item, index) => {
                        return (
                            <FeedbackCard key={index} feedback={item} />
                        )
                    })
                }
            </div>
        </Layout>
    )
}

export default Feedback