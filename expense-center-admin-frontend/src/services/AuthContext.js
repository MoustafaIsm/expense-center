import { createContext, useContext, useEffect, useState } from 'react';
import Login from '../pages/Login';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {

    const [isAthenticated, setIsAuthenticated] = useState(false);

    const checkIfAuthenticated = () => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }

    useEffect(() => {
        checkIfAuthenticated();
    }, []);

    return (
        <AuthContext.Provider value={{ isAthenticated, setIsAuthenticated }}>
            {isAthenticated ? children : <Login />}
        </AuthContext.Provider>
    )
}

export default AuthContext;