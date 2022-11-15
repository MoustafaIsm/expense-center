import Dialog from '@mui/material/Dialog';
import { DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { banUser, unbanUser } from '../../query/bans';
import { useEffect } from 'react';

function ConfirmationModal({ title, question, id, type, onClose, ...props }) {

    const {
        mutate: mutateBanUser,
        isSuccess: isBanUserSuccess,
        isError: isBanUserError,
    } = useMutation(banUser);

    const {
        mutate: mutateUnbanUser,
        isSuccess: isUnbanUserSuccess,
        isError: isUnbanUserError,
    } = useMutation(unbanUser);

    const handleConfirmation = () => {
        if (type === 'ban') {
            mutateBanUser(id);
        } else if (type === 'unban') {
            mutateUnbanUser(id);
        }
        onClose();
    }

    useEffect(() => {
        if (isBanUserSuccess || isUnbanUserSuccess) {
            console.log('success');
        }
        if (isBanUserError || isUnbanUserError) {
            console.log('error');
        }
    }, [isBanUserSuccess, isBanUserError, isUnbanUserSuccess, isUnbanUserError]);

    return (
        <Dialog {...props}>
            <DialogTitle className='bold-text'> {title} </DialogTitle>
            <DialogContent className='text-black'>
                <p> {question} </p>
            </DialogContent>
            <DialogActions>
                <button className='hover:bg-light-green transition-all duration-300 px-3 py-1 uppercase bold-text' onClick={handleConfirmation}>Yes</button>
                <button className='hover:bg-light-green transition-all duration-300 px-3 py-1 uppercase bold-text' onClick={onClose}>Cancel</button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmationModal