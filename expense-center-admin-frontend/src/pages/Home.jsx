import { useState, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { PAGE_TYPES } from '../utilities/constants';
import { AuthContext } from '../services/AuthContext';
import SideNavButton from '../components/navigation/SideNavButton';

function Home() {

    const [activePage, setActivePage] = useState(PAGE_TYPES[0]);
    const [isAuthenticated, setIsAuthenticated] = useContext(AuthContext);

    const logout = () => {
        localStorage.clear();
        setIsAuthenticated(!isAuthenticated);
    }

    return (
        <div>
            <div className='flex'>
                <nav className="w-1/5 bg-primary-blue h-screen fixed min-w-200px flex flex-col">
                    <ul className="py-5 flex flex-col">
                        <li className='px-5 py-4'>
                            <img src="/logo-with-side-text.png" alt="logo" />
                        </li>
                        {
                            PAGE_TYPES.map((type, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={index === 0 ? '/' : type.toLowerCase(type)}>
                                            <SideNavButton
                                                type={type}
                                                active={activePage}
                                                changeActive={setActivePage} />

                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className='self-center flex-grow w-full flex items-end justify-center p-5'>
                        <button className="bg-primary-green text-lg text-white uppercase bold-text hover:cursor-pointer hover:bg-secondary-green py-2 px-4 rounded-xl transition-all duration-300 w-full" onClick={logout}>
                            Logout
                        </button>
                    </div>
                </nav>
                <Outlet />
            </div >
        </div>
    )
}

export default Home