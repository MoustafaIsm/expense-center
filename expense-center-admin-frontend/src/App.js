import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Statistics from './pages/Statistics';
import Categories from './pages/Categories';
import Feedback from './pages/Feedback';
import Home from './pages/Home';
import Protected from './components/Protected';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to='home' />} />
                <Route path="/login" element={<Login />} />
                <Route path='home' element={<Protected><Home /></Protected>} >
                    <Route element={<Protected><Dashboard /></Protected>} index />
                    <Route path="categories" element={<Protected><Categories /></Protected>} />
                    <Route path="statistics" element={<Protected><Statistics /></Protected>} />
                    <Route path="feedback" element={<Protected><Feedback /></Protected>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
