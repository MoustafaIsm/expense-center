import Layout from "../components/layouts/Layout";
import { STATISTICS } from '../utilities/constants';
import StatisticsBarGraph from "../components/graphs/StatisticsBarGraph";
import StatisticsLineGraph from "../components/graphs/StatisticsLineGraph";

function Statistics() {
    // TODO: Get the information of the statistics
    // TODO: Send the data to the graphs through props

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <Layout title={STATISTICS}>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {
                    array.map((item, index) => {
                        return (
                            index % 2 === 0 ?
                                <StatisticsBarGraph key={index} title={'Bar Graph'} />
                                :
                                <StatisticsLineGraph key={index} title={'Line Graph'} />
                        )
                    })
                }
            </div>
        </Layout>
    )
}

export default Statistics