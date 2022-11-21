import Dialog from '@mui/material/Dialog';
import { DialogTitle, DialogContent, DialogActions } from '@mui/material';

function UserInfoModal({ user, onClose, ...props }) {
    return (
        <Dialog {...props}>
            <DialogTitle className='bold-text'> {user.username} info </DialogTitle>
            <DialogContent className='text-black'>
                <div className="flex flex-col gap-4 items-center">
                    {/* Profile picture */}
                    <div>
                        <img className="rounded-full h-24 w-24" src={user.profile_picture_url} alt="Profile" />
                    </div>
                    {/* User information */}
                    <div className='grid grid-cols-3 w-full gap-5'>
                        {/* Personal information */}
                        <div className='w-max px-3'>
                            <p className='bold-text text-lg'>Personal information: </p>
                            <p>{user.email}</p>
                            <p>{user.date_of_birth}</p>
                            <p>{user.gender}</p>
                            <p>{user.relationship_status === 'NA' ? 'No relationship status' : user.relationship_status}</p>
                            <p>Nummber of kids: {user.nbr_of_children}</p>
                            <p>Chat is enabled: {user.chat_enabled === 1 ? 'Yes' : 'No'}</p>
                        </div>
                        {/* Financial information */}
                        <div className='w-max px-3'>
                            <p className='bold-text text-lg'>Financial information: </p>
                            <p>{user.education_feild === 'NA' ? 'No education data' : user.education_feild}</p>
                            <p>{user.work_feild === 'NA' ? 'No work feild' : user.work_feild}</p>
                            <p>{user.job_title === 'NA' ? 'No job title' : user.job_title}</p>
                            <p>Yearly salary: {user.yearly_salary}</p>
                            <p>Income: {user.income}</p>
                            <p>Outcome: {user.outcome}</p>
                        </div>
                        {/* Admin information */}
                        <div className='w-max px-3'>
                            <p className='bold-text text-lg'>Admin information: </p>
                            <p>Verified email</p>
                            <p>Profile last updated at :<br></br> {user.updated_at.split('T')[0]} {user.updated_at.split('T')[1].split('.')[0]}</p>
                        </div>
                    </div>
                </div>
            </DialogContent>
            <DialogActions>
                <button className='hover:bg-light-green transition-all duration-300 px-3 py-1 uppercase bold-text' onClick={onClose}>Close</button>
            </DialogActions>
        </Dialog>
    )
}

export default UserInfoModal