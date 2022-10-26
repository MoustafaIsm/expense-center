import TableRow from "./TableRow";

function Tab({ text }) {

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div className="w-full">
            <table className="w-full">
                <tr>
                    <th className="w-1/5 border-l border-b border-gray-300 bold-text"> Username </th>
                    <th className="w-1/5 border-l border-b border-gray-300 bold-text"> Email </th>
                    <th className="w-1/5 border-l border-b border-gray-300 bold-text"> Email Verified </th>
                    <th className="w-1/5 border-l border-b border-gray-300 bold-text"> Is Admin </th>
                    <th className="w-1/5 border-l border-b border-gray-300"></th>
                </tr>
                {
                    array.map((user, index) => {
                        return (
                            <TableRow key={index} colored={index % 2 === 0 ? true : false} user={user} />
                        )
                    })
                }
            </table>
        </div>
    )
}

export default Tab