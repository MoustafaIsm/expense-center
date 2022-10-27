import Dialog from '@mui/material/Dialog';
import { DialogTitle, DialogContent, DialogActions } from '@mui/material';

function UserInfoModal({ user, onClose, ...props }) {
    return (
        <Dialog {...props}>
            <DialogTitle className='bold-text'> Username info </DialogTitle>
            <DialogContent className='text-black'>
                <div className="flex flex-col gap-4 items-center">
                    {/* Profile picture */}
                    <div>
                        <img className="rounded-full h-24 w-24" src="/profile-picture-placeholder.jpg" alt="Profile" />
                    </div>
                    {/* User information */}
                    <div className='grid grid-cols-3 w-full gap-5'>
                        {/* Personal information */}
                        <div className='w-max px-3'>
                            <p className='bold-text text-lg'>Personal information: </p>
                            <p>Email</p>
                            <p>Date of birth</p>
                            <p>Gender</p>
                            <p>Relationship status</p>
                            <p>Nummber of kids</p>
                            <p>Living location</p>
                            <p>Chat is enabled</p>
                        </div>
                        {/* Financial information */}
                        <div className='w-max px-3'>
                            <p className='bold-text text-lg'>Financial information: </p>
                            <p>Education feild</p>
                            <p>Work feild</p>
                            <p>Job title</p>
                            <p>Yearly salary</p>
                            <p>Work city</p>
                            <p>Income</p>
                            <p>Outcome</p>
                        </div>
                        {/* Admin information */}
                        <div className='w-max px-3'>
                            <p className='bold-text text-lg'>Admin information: </p>
                            <p>Verified email</p>
                            <p>Profile last updated at :</p>
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