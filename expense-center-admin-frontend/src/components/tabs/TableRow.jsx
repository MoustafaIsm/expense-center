import { useModal } from 'mui-modal-provider';
import ConfirmationModal from '../modals/ConfirmationModal';

function TableRow({ colored, banned, user }) {

    const { showModal, destroyModal } = useModal();

    const openConfirmationModal = () => {
        showModal(ConfirmationModal,
            {
                title: `${banned ? 'Unban' : 'Ban'} user`,
                question: `Are you sure you want to ${banned ? 'unban' : 'ban'} username?`,
                onClose: destroyModal,
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
                    <div className='flex gap-4 w-full justify-center'>
                        <button className='text-primary-green text-lg underline underline-offset-8 hover:cursor-pointer hover:text-secondary-green transition-all duration-300 w-1/2' onClick={openConfirmationModal}> View info </button>
                        <button className='text-primary-green text-lg underline underline-offset-8 hover:cursor-pointer hover:text-secondary-green transition-all duration-300 w-1/2' onClick={openConfirmationModal}> {banned ? 'unban' : 'ban'} </button>
                    </div>
                </td>
            </tr>
        </tbody>
    )
}

export default TableRow