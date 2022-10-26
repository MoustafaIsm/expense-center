import Layout from "../components/layouts/Layout";
import { FEEDBACK } from '../utilities/constants';
import FeedbackCard from '../components/feedback/FeedbackCard';

function Feedback() {
    // TODO: Get feedbacks 

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <Layout title={FEEDBACK}>
            <div className="grid grid-cols-2 gap-9">
                {
                    array.map((item, index) => {
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