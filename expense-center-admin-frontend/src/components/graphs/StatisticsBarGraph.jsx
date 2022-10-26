import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

function StatisticsBarGraph({ title }) {

    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: title,
            },
        },
    };

    const labels = ['1', '2', '3', '4', '5'];

    const data = {
        labels,
        datasets: [{
            label: 'Ammount',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
            backgroundColor: labels.map(() => faker.internet.color(100, 100, 100)),
        },],
    };

    return (
        <div>
            <Bar options={options} data={data} />
        </div>
    )
}

export default StatisticsBarGraph