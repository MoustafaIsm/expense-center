import Dialog from '@mui/material/Dialog';
import { DialogTitle, DialogContent, DialogActions } from '@mui/material';

function AddCategoryModal({ title, onClose, ...props }) {
    return (
        <Dialog {...props}>
            <DialogTitle className='bold-text'> {title} </DialogTitle>

            <DialogContent className='text-black'>

            </DialogContent>

            <DialogActions>
                <button className='hover:bg-light-green transition-all duration-300 px-3 py-1 uppercase bold-text' onClick={onClose}>Cancel</button>
            </DialogActions>
        </Dialog>
    )
}

export default AddCategoryModal