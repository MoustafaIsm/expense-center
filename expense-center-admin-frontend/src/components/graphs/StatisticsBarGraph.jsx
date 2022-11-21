import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { useState, useEffect } from 'react';

function StatisticsBarGraph({ title, label, labels, userData }) {

    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

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
        setBackgroundColor(labels.map(label => faker.internet.color(100, 100, 100)));
    }, [labels]);

    return (
        <div className='bg-white'>
            <Bar options={options} data={data} />
        </div>
    )
}

export default StatisticsBarGraph