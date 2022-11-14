import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';

function CategoryBarGraph({ category }) {

    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

    const [labels, setLabels] = useState([]);
    const [subCategoryData, setSubCategoryData] = useState([]);

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: category.name,
            },
        },
    };

    const data = {
        labels,
        datasets: [{
            label: 'Ammount',
            data: subCategoryData,
            backgroundColor: labels.map(() => faker.internet.color(100, 100, 100)),
        },],
    };

    const getTotal = (receipts) => {
        let total = 0;
        receipts.forEach(receipt => {
            total += receipt.amount;
        });
        return total;
    }

    useEffect(() => {
        setLabels(category.sub_categories.map(subcategory => subcategory.name.split('(')[0]));
        setSubCategoryData(category.sub_categories.map(subcategory => getTotal(subcategory.receipts)));
    }, [category]);

    return (
        <div className='bg-white'>
            <Bar options={options} data={data} />
        </div>
    )
}

export default CategoryBarGraph