import { Link } from 'react-router-dom';

function SideNavigation() {
    return (
        <nav className="w-1/5 bg-primary-blue h-screen">
            <ul className="py-5 px-1 flex flex-col">
                {/* Logo */}
                <li>
                    <div>
                        <img src="/logo-with-side-text.png" alt="logo" />
                    </div>
                </li>
                {/* Menu */}
                <li>

                </li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </nav>
    )
}

export default SideNavigation