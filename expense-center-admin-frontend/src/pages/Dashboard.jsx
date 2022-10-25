import Layout from "../components/layouts/Layout";
import { DASHBOARD } from '../utilities/constants';
import Tabs from "../components/tabs/Tabs";

function Dashboard() {
    return (
        <Layout title={DASHBOARD}>
            <Tabs />
        </Layout>
    )
}

export default Dashboard