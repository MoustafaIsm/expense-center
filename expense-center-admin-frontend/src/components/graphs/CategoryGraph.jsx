import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

function CategoryGraph() {

    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Category name',
            },
        },
    };

    const labels = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5'];

    const data = {
        labels,
        datasets: [{
            data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
            backgroundColor: labels.map(() => faker.internet.color()),
        },],
    };

    return (
        <Bar options={options} data={data} />
    )
}

export default CategoryGraph