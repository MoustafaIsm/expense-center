
function FeedbackCard() {
    return (
        <div className="bg-white boder border-x-secondary-blue shadow-md shadow-secondary-blue p-6 rounded-xl flex flex-col gap-4 hover:scale-105 transition-all duration-300">
            <div className="flex gap-4 items-center justify-between">
                <div className="flex gap-4 items-center">
                    <div>
                        <img className="rounded-full h-16 w-16" src="/profile-picture-placeholder.jpg" alt="Profile" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="bold-text">Username</p>
                        <p>email</p>
                    </div>
                </div>
                <div className="text-secondary-blue">
                    <p>Date</p>
                </div>
            </div>
            <div>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio sequi qui eius! Cupiditate similique recusandae consectetur dolor facilis, placeat dolore eaque laboriosam natus ex eligendi suscipit tempore adipisci exercitationem quo.
                    Reiciendis quam sint, rerum quos aliquam suscipit perferendis consequatur similique, laborum iusto odit amet, incidunt illo qui veritatis. Fuga nihil voluptatum earum hic unde laborum at fugit, mollitia distinctio nostrum?
                </p>
            </div>
        </div>
    )
}

export default FeedbackCard