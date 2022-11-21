import Layout from "../components/layouts/Layout";
import { STATISTICS } from '../utilities/constants';
import StatisticsBarGraph from "../components/graphs/StatisticsBarGraph";
import StatisticsLineGraph from "../components/graphs/StatisticsLineGraph";
import { useMostClickedUsers, useMostFavoritedUsers, useIncomes, useOutcomes, useSavings, reset } from '../query/statistics';
import { useMutation } from '@tanstack/react-query';
import { getCurrentDate } from '../utilities/functions'

function Statistics() {

    const { data: mostClickedUsers } = useMostClickedUsers();
    const { data: mostFavoritedUsers } = useMostFavoritedUsers();
    const { data: incomes } = useIncomes();
    const { data: outcomes } = useOutcomes();
    const { data: savings } = useSavings();

    const { mutate: mutateReset } = useMutation(reset);

    const dataFromServer = [mostClickedUsers, mostFavoritedUsers, incomes, outcomes, savings];

    const handleReset = () => {
        const date = getCurrentDate();
        mutateReset({ month: date.month, year: date.year });
    }

    return (
        <Layout
            title={STATISTICS}
            hasButton={true}
            buttonText={'Reset income and outcome'}
            buttonEvent={handleReset}>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {
                    dataFromServer.map((data, index) => {
                        return (
                            <div key={index}>
                                {
                                    data.type === 'bar' ?
                                        <StatisticsBarGraph
                                            title={data.title}
                                            label={data.label}
                                            labels={data.labels}
                                            userData={data.dataset} />
                                        :
                                        <StatisticsLineGraph
                                            title={data.title}
                                            label={data.label}
                                            labels={data.labels}
                                            statData={data.dataset} />
                                }
                            </div>
                        );
                    })
                }
            </div>
        </Layout>
    )
}

export default Statistics