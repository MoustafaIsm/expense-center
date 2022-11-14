import { useRef, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Input from '../common/Input';
import SubCategoryInput from '../categories/SubCategoryInput';

function AddCategoryModal({ title, onConfirm, onClose, ...props }) {

    const categoryNameRef = useRef();
    const [subCategories, setSubCategories] = useState(['']);

    const handleSubmit = (e) => {
        e.preventDefault();
        const category = {
            name: categoryNameRef.current.value,
            sub_categories: subCategories.map(subCategory => ({ name: subCategory })),
        };
        onConfirm(category);
        onClose();
    }

    const removeInput = (index) => {
        const newSubCategories = [...subCategories];
        newSubCategories.splice(index, 1);
        setSubCategories(newSubCategories);
    }

    const changeValue = (index, e) => {
        const newSubCategories = [...subCategories];
        newSubCategories[index] = e.target.value;
        setSubCategories(newSubCategories);
    }

    return (
        <Dialog {...props}>
            <DialogTitle className='bold-text'> {title} </DialogTitle>

            <DialogContent className='text-black'>
                <form className='flex flex-col' onSubmit={(e) => handleSubmit(e)}>
                    <Input
                        label={'Name'}
                        inputRef={categoryNameRef}
                        placeholder={'Category name'} />
                    {/* Sub categories */}
                    <div className='flex flex-col gap-4 py-4'>
                        <div className='flex justify-between items-center gap-x-10'>
                            <p className='bold-text'>Sub-Categories</p>
                            <div className='flex gap-4'>
                                <button
                                    type='button'
                                    onClick={() => setSubCategories([...subCategories, ''])}
                                    className="bg-primary-green text-sm text-white uppercase bold-text hover:cursor-pointer hover:bg-secondary-green py-2 px-4 rounded-xl transition-all duration-300">
                                    Add sub-Category
                                </button>
                            </div>
                        </div>
                        {
                            subCategories.map((subCategory, index) => (
                                <SubCategoryInput
                                    key={index}
                                    value={subCategory}
                                    onChange={(e) => changeValue(index, e)}
                                    isFirst={index === 0 ? true : false}
                                    onRemove={() => removeInput(index)} />
                            ))
                        }
                    </div>

                    <button
                        type='submit'
                        className="bg-primary-blue text-lg text-white uppercase bold-text hover:cursor-pointer hover:bg-secondary-blue py-2 px-4 rounded-xl transition-all duration-300 self-center">
                        Add Category
                    </button>
                </form>
            </DialogContent>

            <DialogActions>
                <button className='hover:bg-light-green transition-all duration-300 px-3 py-1 uppercase bold-text' onClick={onClose}>Cancel</button>
            </DialogActions>
        </Dialog>
    )
}

export default AddCategoryModal