import { useRef, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Input from '../common/Input';
import SubCategoryInput from '../categories/SubCategoryInput';

function AddCategoryModal({ title, onClose, ...props }) {

    const categoryNameRef = useRef();
    const [subCategories, setSubCategories] = useState(['']);

    const handleSubmit = () => {
        // TODO: Do an API call to add the category
        onClose();
    }

    return (
        <Dialog {...props}>
            <DialogTitle className='bold-text'> {title} </DialogTitle>

            <DialogContent className='text-black'>
                <form className='flex flex-col'>
                    <Input
                        label={'Name'}
                        inputRef={categoryNameRef}
                        placeholder={'Category name'} />
                    {/* Sub categories */}
                    <div className='flex flex-col gap-4'>
                        <div className='flex justify-between items-center gap-x-10'>
                            <p className='bold-text'>Sub-Categories</p>
                            <div className='flex gap-4'>
                                <button
                                    type='button'
                                    className="bg-primary-green text-sm text-white uppercase bold-text hover:cursor-pointer hover:bg-secondary-green py-2 px-4 rounded-xl transition-all duration-300">
                                    Add sub-Category
                                </button>
                            </div>
                        </div>
                        {
                            subCategories.map((subCategory, index) => (
                                <SubCategoryInput
                                    isFirst={index === 0 ? true : false} />
                            ))
                        }
                    </div>

                    <button
                        type='submit'
                        onClick={handleSubmit}
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