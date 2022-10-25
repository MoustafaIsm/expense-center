import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { DASHBOARD, CATEGORIES, STATISTICS, FEEDBACK } from './utilities/constants';
import Dashboard from './pages/Dashboard';
import Statistics from './pages/Statistics';
import SideNavButton from './components/SideNavButton';

function App() {
    return (
        <BrowserRouter>
            <div className='flex'>
                <nav className="w-1/5 bg-primary-blue h-screen">
                    <ul className="py-5 flex flex-col">
                        <li className='px-2'>
                            <img src="/logo-with-side-text.png" alt="logo" />
                        </li>
                        <li>
                            <Link to='/'>
                                <SideNavButton type={DASHBOARD} />
                            </Link>
                        </li>
                        <li>
                        </li>
                        <li></li>
                        <li></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/statistics" element={<Statistics />} />
                    {/* <Route path="/categories" element={<Categories />} />
                    <Route path="/feedback" element={<Feedback />} /> */}
                </Routes>
            </div >
        </BrowserRouter>
    );
}

export default App;
