import Layout from "../components/layouts/Layout";
import { STATISTICS } from '../utilities/constants';
import StatisticsBarGraph from "../components/graphs/StatisticsBarGraph";
import StatisticsLineGraph from "../components/graphs/StatisticsLineGraph";
import { useMostClickedUsers, useMostFavoritedUsers, useIncomes, useOutcomes, useSavings } from '../query/statistics';
import { useEffect, useState } from "react";

function Statistics() {

    const { data: mostClickedUsers, isSuccess: mostClickedUsersSuccess } = useMostClickedUsers();
    const { data: mostFavoritedUsers, isSuccess: mostFavoritedUsersSuccess } = useMostFavoritedUsers();
    const { data: incomes, isSuccess: incomesSuccess } = useIncomes();
    const { data: outcomes, isSuccess: outcomesSuccess } = useOutcomes();
    const { data: savings, isSuccess: savingsSuccess } = useSavings();

    const [mostClickedLabels, setMostClickedLabels] = useState([]);
    const [mostClickedData, setMostClickedData] = useState([]);
    const [mostFavoritedLabels, setMostFavoritedLabels] = useState([]);
    const [mostFavoritedData, setMostFavoritedData] = useState([]);
    const [incomesLabels, setIncomesLabels] = useState([]);
    const [incomesData, setIncomesData] = useState([]);
    const [outcomesLabels, setOutcomesLabels] = useState([]);
    const [outcomesData, setOutcomesData] = useState([]);
    const [savingsLabels, setSavingsLabels] = useState([]);
    const [savingsData, setSavingsData] = useState([]);

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
        if (savingsSuccess) {
            setSavingsLabels(savings.map(saving => saving.month + '-' + saving.year));
            setSavingsData(savings.map(saving => saving.total));
        }
    }, [
        mostClickedUsers,
        mostClickedUsersSuccess,
        mostFavoritedUsers,
        mostFavoritedUsersSuccess,
        incomes,
        incomesSuccess,
        outcomes,
        outcomesSuccess,
        savings,
        savingsSuccess
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
                <StatisticsLineGraph
                    title="Savings"
                    label={'Savings'}
                    labels={savingsLabels}
                    statData={savingsData} />
            </div>
        </Layout>
    )
}

export default Statistics