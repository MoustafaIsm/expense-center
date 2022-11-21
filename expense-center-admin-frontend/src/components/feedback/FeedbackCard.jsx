
function FeedbackCard({ feedback }) {
    return (
        <div className="bg-white boder border-x-secondary-blue shadow-md shadow-secondary-blue p-6 rounded-xl flex flex-col gap-4 hover:scale-105 transition-all duration-300">
            <div className="flex gap-4 items-center justify-between">
                <div className="flex gap-4 items-center">
                    <div>
                        <img className="rounded-full h-16 w-16" src={feedback.user.profile_picture_url} alt="Profile" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="bold-text">{feedback.user.username}</p>
                        <p>{feedback.user.email}</p>
                    </div>
                </div>
                <div className="text-secondary-blue">
                    <p>{feedback.created_at.split('T')[0]} {feedback.created_at.split('T')[1].split('.')[0]}</p>
                </div>
            </div>
            <div>
                <p>{feedback.message}</p>
            </div>
        </div>
    )
}

export default FeedbackCard