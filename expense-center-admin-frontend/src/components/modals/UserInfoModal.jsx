import Dialog from '@mui/material/Dialog';
import { DialogTitle, DialogContent, DialogActions } from '@mui/material';

function UserInfoModal({ user, onClose, ...props }) {
    return (
        <Dialog {...props}>
            <DialogTitle className='bold-text'> Username info </DialogTitle>
            <DialogContent className='text-black'>
                <p> user Info </p>
            </DialogContent>
            <DialogActions>
                <button className='hover:bg-light-green transition-all duration-300 px-3 py-1 uppercase bold-text' onClick={onClose}>Close</button>
            </DialogActions>
        </Dialog>
    )
}

export default UserInfoModal