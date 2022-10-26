import Layout from "../components/layouts/Layout";
import { CATEGORIES } from '../utilities/constants';
import CategoryGraph from "../components/graphs/CategoryGraph";

function Categories() {



    return (
        <Layout title={CATEGORIES}>
            <div>
                <CategoryGraph />
            </div>
        </Layout>
    )
}

export default Categories