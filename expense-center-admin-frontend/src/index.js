import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './fonts/Roboto/Roboto-Regular.ttf';
import ModalProvider from 'mui-modal-provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './services/AuthContext';

export const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={queryClient}>
        <AuthProvider>
            <ModalProvider>
                <App />
            </ModalProvider>
        </AuthProvider>
    </QueryClientProvider>
);

