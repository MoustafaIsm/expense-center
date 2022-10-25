import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableColumns, faShapes, faChartSimple, faMessage } from '@fortawesome/free-solid-svg-icons'
import { DASHBOARD, CATEGORIES, STATISTICS, FEEDBACK } from '../utilities/constants';

function SideNavButton({ type, active, changeActive }) {

    let icon = null;

    switch (type) {
        case DASHBOARD:
            icon = faTableColumns;
            break;
        case CATEGORIES:
            icon = faShapes;
            break;
        case STATISTICS:
            icon = faChartSimple;
            break;
        case FEEDBACK:
            icon = faMessage;
            break;
        default:
            break;
    }

    const changeActivePage = () => {
        changeActive(type);
    }

    return (
        <div className={`flex text-white my-4 text-2xl px-5 py-4 transition-all duration-300 hover:bg-secondary-blue hover:cursor-pointer ${active === type ? 'bg-secondary-blue' : ''}`} onClick={changeActivePage}>
            <div className='pr-3'>
                <FontAwesomeIcon icon={icon} />
            </div>
            <div className=''>
                <p>{type}</p>
            </div>
        </div>
    )
}

export default SideNavButton