import { Navigate } from 'react-router-dom';

function Protected({ isAuthenticated, children }) {
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    return children;
}

export default Protected