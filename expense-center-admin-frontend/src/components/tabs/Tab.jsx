
function Tab({ text }) {



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

            </table>
        </div>
    )
}

export default Tab