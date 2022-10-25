import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideNavigation from './components/SideNavigation';

function App() {
    return (
        <div>
            <SideNavigation />
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/" element={<Dashboard />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/statistics" element={<Statistics />} />
                    <Route path="/feedback" element={<Feedback />} /> */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
