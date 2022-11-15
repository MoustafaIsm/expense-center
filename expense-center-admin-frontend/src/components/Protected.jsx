import { Navigate } from 'react-router-dom';
import { useAuth } from '../services/AuthContext';

function Protected({ children }) {
    const { isAuthenticated } = useAuth();
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    return children;
}

export default Protected