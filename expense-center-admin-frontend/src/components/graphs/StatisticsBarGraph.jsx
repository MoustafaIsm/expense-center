import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { useState, useEffect } from 'react';

function StatisticsBarGraph({ title, label, users }) {

    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

    const [labels, setLabels] = useState([]);
    const [userData, setUserData] = useState([]);
    const [backgroundColor, setBackgroundColor] = useState([]);

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: title,
            },
        },
    };

    const data = {
        labels,
        datasets: [{
            label,
            data: userData,
            backgroundColor,
        },],
    };

    useEffect(() => {
        if (users) {
            setLabels(users.map(user => user.username));
            setUserData(users.map(user => user.nbr_of_clicks));
            setBackgroundColor(users.map(user => faker.internet.color(100, 100, 100)));
        }
    }, [users]);

    return (
        <div className='bg-white'>
            <Bar options={options} data={data} />
        </div>
    )
}

export default StatisticsBarGraph