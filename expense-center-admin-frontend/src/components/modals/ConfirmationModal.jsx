import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

function ConfirmationModal({ title, question, ...props }) {
    return (
        <Dialog {...props}>
            <DialogTitle> {title} </DialogTitle>
            <p> {question} </p>
            <button>Yes</button>
            <button>No</button>
        </Dialog>
    )
}

export default ConfirmationModal