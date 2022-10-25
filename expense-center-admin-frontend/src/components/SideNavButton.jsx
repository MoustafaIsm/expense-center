import { DASHBOARD, CATEGORIES, STATISTICS, FEEDBACK } from '../utilities/constants';

function SideNavButton({ type }) {

    let icon = null;
    let text = null;

    switch (type) {

        case DASHBOARD:

            break;
        case CATEGORIES:

            break;
        case STATISTICS:

            break;
        case FEEDBACK:

            break;
        default:
            break;
    }

    return (
        <div className="flex justify-center">
            {icon}
            {text}
        </div>
    )
}

export default SideNavButton