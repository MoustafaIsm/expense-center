import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function SubCategoryInput({ isFirst, value, onChange, onRemove }) {

    return (
        <div className='flex items-center gap-4'>
            <input
                type="text"
                placeholder='Sub-Category name'
                value={value}
                onChange={onChange}
                className="border-2 border-primary-blue rounded-xl px-3 py-2 text-lg focus:border-2 focus:border-secondary-blue focus:outline-none" />
            {
                isFirst ?
                    null
                    :
                    <button type='button' onClick={onRemove} className='p-3 bg-red-600 flex items-center justify-center rounded hover:cursor-pointer hover:bg-red-400'>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
            }
        </div>
    )
}

export default SubCategoryInput