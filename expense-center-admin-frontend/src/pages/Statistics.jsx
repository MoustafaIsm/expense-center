import Layout from "../components/layouts/Layout";
import { STATISTICS } from '../utilities/constants';
import StatisticsBarGraph from "../components/graphs/StatisticsBarGraph";
import StatisticsLineGraph from "../components/graphs/StatisticsLineGraph";
import { useMostClickedUsers, useMostFavoritedUsers } from '../query/statistics';
import { useEffect, useState } from "react";

function Statistics() {
    // TODO: Get the information of the statistics
    // TODO: Send the data to the graphs through props

    const { data: mostClickedUsers, isSuccess: mostClickedUsersSuccess } = useMostClickedUsers();
    const { data: mostFavoritedUsers, isSuccess: mostFavoritedUsersSuccess } = useMostFavoritedUsers();

    const [mostClickedLabels, setMostClickedLabels] = useState([]);
    const [mostClickedData, setMostClickedData] = useState([]);
    const [mostFavoritedLabels, setMostFavoritedLabels] = useState([]);
    const [mostFavoritedData, setMostFavoritedData] = useState([]);

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


    useEffect(() => {
        if (mostClickedUsersSuccess) {
            setMostClickedLabels(mostClickedUsers.map(user => user.username));
            setMostClickedData(mostClickedUsers.map(user => user.nbr_of_clicks));
        }
        if (mostFavoritedUsersSuccess) {
            setMostFavoritedLabels(mostFavoritedUsers.map(user => user.favorited_info.username));
            setMostFavoritedData(mostFavoritedUsers.map(user => user.total));
        }
    }, [mostClickedUsers, mostClickedUsersSuccess, mostFavoritedUsers, mostFavoritedUsersSuccess]);

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