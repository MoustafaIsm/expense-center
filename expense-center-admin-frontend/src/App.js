import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

function App() {
    return (
        <BrowserRouter>
            <div className='flex'>
                <nav className="w-1/5 bg-primary-blue h-screen">
                    <ul className="py-5 flex flex-col">
                        {/* Logo */}
                        <li className='px-2'>
                            <div>
                                <img src="/logo-with-side-text.png" alt="logo" />
                            </div>
                        </li>
                        {/* Links */}
                        <li>
                            <Link to='/'>
                                <p>text</p>
                            </Link>
                        </li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    {/* <Route path="/categories" element={<Categories />} />
                    <Route path="/statistics" element={<Statistics />} />
                    <Route path="/feedback" element={<Feedback />} /> */}
                </Routes>
            </div >
        </BrowserRouter>
    );
}

export default App;
