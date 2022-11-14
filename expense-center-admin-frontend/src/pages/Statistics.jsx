import Layout from "../components/layouts/Layout";
import { STATISTICS } from '../utilities/constants';
import StatisticsBarGraph from "../components/graphs/StatisticsBarGraph";
import StatisticsLineGraph from "../components/graphs/StatisticsLineGraph";
import { useMostClickedUsers } from '../query/statistics';

function Statistics() {
    // TODO: Get the information of the statistics
    // TODO: Send the data to the graphs through props

    const { data: mostClickedUsers } = useMostClickedUsers();

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <Layout title={STATISTICS}>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <StatisticsBarGraph title="Most clicked users" label={'Clicks'} users={mostClickedUsers} />
                {
                    array.map((item, index) => {
                        return (
                            <StatisticsLineGraph key={index} title={'Line Graph'} />
                        )
                    })
                }
            </div>
        </Layout>
    )
}

export default Statistics