import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import SideNavButton from '../components/navigation/SideNavButton';
import { PAGE_TYPES } from '../utilities/constants';

function Home() {

    const [activePage, setActivePage] = useState(PAGE_TYPES[0]);

    console.log("home");

    return (
        <div>
            <div className='flex'>
                <nav className="w-1/5 bg-primary-blue h-screen fixed min-w-200px">
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
                </nav>
                <Outlet />
            </div >
        </div>
    )
}

export default Home