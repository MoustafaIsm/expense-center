import { useModal } from 'mui-modal-provider';
import ConfirmationModal from '../modals/ConfirmationModal';
import UserInfoModal from '../modals/UserInfoModal';

function TableRow({ colored, banned, user }) {

    const { showModal, destroyModal } = useModal();

    const openConfirmationModal = () => {
        showModal(ConfirmationModal, {
            title: `${banned ? 'Unban' : 'Ban'} user`,
            question: `Are you sure you want to ${banned ? 'unban' : 'ban'} ${user.username}?`,
            id: user.id,
            type: `${banned ? 'unban' : 'ban'}`,
            onClose: destroyModal,
        });
    }

    const openUserInfoModal = () => {
        showModal(UserInfoModal, {
            user: user,
            onClose: destroyModal,
        });
    }

    return (
        <tbody className={`text-center ${colored ? 'bg-light-green' : ''}`}>
            <tr>
                <td className="w-1/5 border-l border-b border-gray-300">
                    <div className="flex items-center gap-4 p-2">
                        {/* Profile picture */}
                        <div>
                            <img className="rounded-full h-12 w-12" src={user.profile_picture_url} alt="Profile" />
                        </div>
                        {/* Username */}
                        <div>
                            <p>{user.username}</p>
                        </div>
                    </div>
                </td>
                <td className="w-1/5 border-l border-b border-gray-300"> {user.email} </td>
                <td className="w-1/5 border-l border-b border-gray-300"> {user.role_id === 1 ? 'Yes' : 'No'} </td>
                <td className="w-1/5 border-l border-b border-gray-300">
                    <div className='flex gap-4 w-full justify-center'>
                        <button className='text-primary-green text-lg underline underline-offset-8 hover:cursor-pointer hover:text-secondary-green transition-all duration-300 w-1/2' onClick={openUserInfoModal}> View info </button>
                        <button className='text-primary-green text-lg underline underline-offset-8 hover:cursor-pointer hover:text-secondary-green transition-all duration-300 w-1/2' onClick={openConfirmationModal}> {banned ? 'unban' : 'ban'} </button>
                    </div>
                </td>
            </tr>
        </tbody>
    )
}

export default TableRow
