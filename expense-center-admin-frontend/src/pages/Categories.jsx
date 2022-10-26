import Layout from "../components/layouts/Layout";
import { CATEGORIES } from '../utilities/constants';
import CategoryGraph from "../components/graphs/CategoryGraph";

function Categories() {

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <Layout title={CATEGORIES}>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {
                    array.map((category, index) => (
                        <CategoryGraph key={index} category={category} />
                    ))
                }
            </div>
        </Layout>
    )
}

export default Categories