import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableColumns, faShapes, faChartSimple, faMessage } from '@fortawesome/free-solid-svg-icons'
import { DASHBOARD, CATEGORIES, STATISTICS, FEEDBACK } from '../utilities/constants';

function SideNavButton({ type }) {

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

    return (
        <div className="flex justify-center text-white">
            <div>
                <FontAwesomeIcon icon={icon} />
            </div>
            <div>
                <p>{type}</p>
            </div>
        </div>
    )
}

export default SideNavButton