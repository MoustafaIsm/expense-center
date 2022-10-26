import { useRef } from 'react';
import Dialog from '@mui/material/Dialog';
import { DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Input from '../common/Input';

function AddCategoryModal({ title, onClose, ...props }) {

    const categoryNameRef = useRef();

    const handleSubmit = () => {
        // TODO: Do an API call to add the category
        onClose();
    }

    return (
        <Dialog {...props}>
            <DialogTitle className='bold-text'> {title} </DialogTitle>

            <DialogContent className='text-black'>
                <form>
                    <Input
                        label={'Name'}
                        inputRef={categoryNameRef}
                        placeholder={'Category name'} />
                    {/* Sub categories */}

                    <button
                        type='submit'
                        onClick={handleSubmit}
                        className="bg-primary-green text-lg text-white uppercase bold-text hover:cursor-pointer hover:bg-secondary-green py-2 px-4 rounded-xl transition-all duration-300">
                        Add
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