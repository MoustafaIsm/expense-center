import Dialog from '@mui/material/Dialog';
import { DialogTitle, DialogContent, DialogActions } from '@mui/material';

function ConfirmationModal({ title, question, onClose, ...props }) {

    const handleConfirmation = () => {
        // TODO: Do an API call to ban or unban the user
        onClose();
    }

    return (
        <Dialog {...props}>
            <DialogTitle className='bold-text'> {title} </DialogTitle>
            <DialogContent className='text-black'>
                <p> {question} </p>
            </DialogContent>
            <DialogActions>
                <button className='hover:bg-light-green transition-all duration-300 px-3 py-1' onClick={handleConfirmation}>Yes</button>
                <button className='hover:bg-light-green transition-all duration-300 px-3 py-1' onClick={onClose}>Cancel</button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmationModal