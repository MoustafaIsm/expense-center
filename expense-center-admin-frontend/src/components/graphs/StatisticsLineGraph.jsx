import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { useState, useEffect } from 'react';

function StatisticsLineGraph({ title, label, labels, statData }) {

    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip);

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
            data: statData,
            backgroundColor,
        },],
    };

    useEffect(() => {
        setBackgroundColor(labels.map(() => faker.internet.color(100, 100, 100)));
    }, [labels]);

    return (
        <div className='bg-white'>
            <Line options={options} data={data} />
        </div>
    )
}

export default StatisticsLineGraph