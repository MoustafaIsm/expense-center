import TableRow from "./TableRow";

function Tab({ type, users }) {

    return (
        <div className="w-full">
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="w-1/5 border-l border-b border-gray-300 bold-text py-2"> Username </th>
                        <th className="w-1/5 border-l border-b border-gray-300 bold-text py-2"> Email </th>
                        <th className="w-1/5 border-l border-b border-gray-300 bold-textpy-2"> Is Admin </th>
                        <th className="w-1/5 border-l border-b border-gray-300 py-2"></th>
                    </tr>
                </thead>
                {
                    users.map((user, index) => {
                        return (
                            <TableRow
                                key={index}
                                colored={index % 2 === 0 ? true : false}
                                banned={type === 'Banned' ? true : false}
                                user={type === 'Banned' ? user.user_info : user} />
                        )
                    })
                }
            </table>
        </div>
    )
}

export default Tab