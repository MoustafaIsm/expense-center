import Layout from "../components/layouts/Layout";
import { STATISTICS } from '../utilities/constants';
import StatisticsBarGraph from "../components/graphs/StatisticsBarGraph";
import StatisticsLineGraph from "../components/graphs/StatisticsLineGraph";
import { useMostClickedUsers, useMostFavoritedUsers, useIncomes, useOutcomes } from '../query/statistics';
import { useEffect, useState } from "react";

function Statistics() {
    // TODO: Get the information of the statistics
    // TODO: Send the data to the graphs through props

    const { data: mostClickedUsers, isSuccess: mostClickedUsersSuccess } = useMostClickedUsers();
    const { data: mostFavoritedUsers, isSuccess: mostFavoritedUsersSuccess } = useMostFavoritedUsers();
    const { data: incomes, isSuccess: incomesSuccess } = useIncomes();
    const { data: outcomes, isSuccess: outcomesSuccess } = useOutcomes();

    const [mostClickedLabels, setMostClickedLabels] = useState([]);
    const [mostClickedData, setMostClickedData] = useState([]);
    const [mostFavoritedLabels, setMostFavoritedLabels] = useState([]);
    const [mostFavoritedData, setMostFavoritedData] = useState([]);
    const [incomesLabels, setIncomesLabels] = useState([]);
    const [incomesData, setIncomesData] = useState([]);
    const [outcomesLabels, setOutcomesLabels] = useState([]);
    const [outcomesData, setOutcomesData] = useState([]);

    useEffect(() => {
        if (mostClickedUsersSuccess) {
            setMostClickedLabels(mostClickedUsers.map(user => user.username));
            setMostClickedData(mostClickedUsers.map(user => user.nbr_of_clicks));
        }
        if (mostFavoritedUsersSuccess) {
            setMostFavoritedLabels(mostFavoritedUsers.map(user => user.favorited_info.username));
            setMostFavoritedData(mostFavoritedUsers.map(user => user.total));
        }
        if (incomesSuccess) {
            setIncomesLabels(incomes.map(income => income.month + '-' + income.year));
            setIncomesData(incomes.map(income => income.total));
        }
        if (outcomesSuccess) {
            setOutcomesLabels(outcomes.map(outcome => outcome.month + '-' + outcome.year));
            setOutcomesData(outcomes.map(outcome => outcome.total));
        }
    }, [
        incomes,
        incomesSuccess,
        mostClickedUsers,
        mostClickedUsersSuccess,
        mostFavoritedUsers,
        mostFavoritedUsersSuccess,
        outcomes,
        outcomesSuccess
    ]);

    return (
        <Layout title={STATISTICS}>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <StatisticsBarGraph
                    title="Most clicked users"
                    label={'Clicks'}
                    labels={mostClickedLabels}
                    userData={mostClickedData} />
                <StatisticsBarGraph
                    title="Most favorited users"
                    label={'Favorites'}
                    labels={mostFavoritedLabels}
                    userData={mostFavoritedData} />
                <StatisticsLineGraph
                    title="Incomes"
                    label={'Incomes'}
                    labels={incomesLabels}
                    statData={incomesData} />
                <StatisticsLineGraph
                    title="Outcomes"
                    label={'Outcomes'}
                    labels={outcomesLabels}
                    statData={outcomesData} />

            </div>
        </Layout>
    )
}

export default Statistics