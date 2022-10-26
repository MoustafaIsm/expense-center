
function TableRow({ colored, user }) {
    return (
        <tr className={`${colored ? 'bg-light-green' : ''}`}>
            <td className="w-1/5 border-l border-b border-gray-300">  </td>
            <td className="w-1/5 border-l border-b border-gray-300">  </td>
            <td className="w-1/5 border-l border-b border-gray-300">  </td>
            <td className="w-1/5 border-l border-b border-gray-300">  </td>
            <td className="w-1/5 border-l border-b border-gray-300">  </td>
        </tr>
    )
}

export default TableRow