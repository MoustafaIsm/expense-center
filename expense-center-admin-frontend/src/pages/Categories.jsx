import Layout from "../components/layouts/Layout";
import { CATEGORIES } from '../utilities/constants';
import CategoryBarGraph from "../components/graphs/CategoryBarGraph";

function Categories() {

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <Layout title={CATEGORIES} hasButton={true} buttonText={'Add category'}>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {
                    array.map((category, index) => (
                        <CategoryBarGraph key={index} category={category} />
                    ))
                }
            </div>
        </Layout>
    )
}

export default Categories