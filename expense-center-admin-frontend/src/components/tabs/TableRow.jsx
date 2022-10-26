import { useModal } from 'mui-modal-provider';
import Button from '@mui/material/Button';
import ConfirmationModal from '../modals/ConfirmationModal';

function TableRow({ colored, banned, user }) {

    const { showModal } = useModal();

    const openModal = () => {
        showModal(ConfirmationModal,
            {
                title: 'Simple Dialog',
                question: 'Are you sure?'
            });
    }

    return (
        <tbody className={`text-center ${colored ? 'bg-light-green' : ''}`}>
            <tr>
                <td className="w-1/5 border-l border-b border-gray-300">
                    <div className="flex items-center justify-center gap-4 py-3">
                        {/* Profile picture */}
                        <div>
                            <img className="rounded-full h-12 w-12" src="/profile-picture-placeholder.jpg" alt="Profile" />
                        </div>
                        {/* Username */}
                        <div>
                            <p> Username </p>
                        </div>
                    </div>
                </td>
                <td className="w-1/5 border-l border-b border-gray-300"> someone@gmail.com </td>
                <td className="w-1/5 border-l border-b border-gray-300"> Yes </td>
                <td className="w-1/5 border-l border-b border-gray-300"> No </td>
                <td className="w-1/5 border-l border-b border-gray-300">
                    <Button variant='contained' onClick={openModal}>Ban</Button>
                </td>
            </tr>
        </tbody>
    )
}

export default TableRow