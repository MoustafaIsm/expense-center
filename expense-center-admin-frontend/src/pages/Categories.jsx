import { useModal } from 'mui-modal-provider';
import Layout from "../components/layouts/Layout";
import { CATEGORIES } from '../utilities/constants';
import CategoryBarGraph from "../components/graphs/CategoryBarGraph";
import AddCategoryModal from "../components/modals/AddCategoryModal";
import { useCategories } from '../query/categories';

function Categories() {
    // TODO: Get categories with subcategories
    // TODO: Send the data to the graphs through props
    // TODO: Add function to add category and its subcategories
    const { data: categories } = useCategories();

    const { showModal, destroyModal } = useModal();

    const openAddCategoryModal = () => {
        showModal(AddCategoryModal, {
            title: 'Add category',
            onClose: destroyModal,
        });
    }

    return (
        <Layout
            title={CATEGORIES}
            hasButton={true}
            buttonText={'Add category'}
            buttonEvent={openAddCategoryModal}>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {
                    categories?.map((category, index) => (
                        <CategoryBarGraph key={index} category={category} />
                    ))
                }
            </div>
        </Layout>
    )
}

export default Categories