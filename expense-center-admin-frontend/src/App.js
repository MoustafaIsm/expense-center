import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Statistics from './pages/Statistics';
import Categories from './pages/Categories';
import Feedback from './pages/Feedback';
import Home from './pages/Home';
import Protected from './components/Protected';

function App() {

    const [token, setToken] = useState(localStorage.getItem('token') || '');
    const [isAuthenticated, setIsAuthenticated] = useState(token !== '' ? true : false);

    useEffect(() => {
        if (token) {
            setIsAuthenticated(true);
        }
    }, [token]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to='home' />} />
                <Route path="/login" element={<h1>Login</h1>} />
                <Route path='home' element={
                    <Protected isAuthenticated={isAuthenticated}>
                        <Home />
                    </Protected>} >
                    <Route element={<Dashboard />} index />
                    <Route path="categories" element={<Categories />} />
                    <Route path="statistics" element={<Statistics />} />
                    <Route path="feedback" element={<Feedback />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
