import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getPage } from '../../hooks/sideNavigation';

function SideNavButton({ type, active, changeActive }) {

    const icon = getPage(type);

    const changeActivePage = () => {
        changeActive(type);
    }

    return (
        <div className={`flex text-white my-4 text-2xl p-4 transition-all duration-300 hover:bg-secondary-blue hover:cursor-pointer ${active === type ? 'bg-secondary-blue' : ''}`} onClick={changeActivePage}>
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