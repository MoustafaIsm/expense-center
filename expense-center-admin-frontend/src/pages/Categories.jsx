import { useModal } from 'mui-modal-provider';
import Layout from "../components/layouts/Layout";
import { CATEGORIES } from '../utilities/constants';
import CategoryBarGraph from "../components/graphs/CategoryBarGraph";
import AddCategoryModal from "../components/modals/AddCategoryModal";
import { useCategories, addCategory } from '../query/categories';
import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { queryClient } from '../index';

function Categories() {

    const { data: categories } = useCategories();
    const {
        mutate: addNewCategory,
        isSuccess: isAddCategorySuccess,
        isError: isAddCategoryError,
        error: addCategoryError,
    } = useMutation(addCategory, {
        onSuccess: () => { queryClient.invalidateQueries('ALL_CATEGORIES') }
    });

    const { showModal, destroyModal } = useModal();

    const openAddCategoryModal = () => {
        showModal(AddCategoryModal, {
            title: 'Add category',
            onConfirm: (category) => {
                addNewCategory(category);
            },
            onClose: destroyModal,
        });
    }

    useEffect(() => {
        if (isAddCategorySuccess) {
            console.log('Category added successfully');
        }
        if (isAddCategoryError) {
            console.log('Error adding category', addCategoryError);
        }
    }, [isAddCategorySuccess, isAddCategoryError, addCategoryError]);

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