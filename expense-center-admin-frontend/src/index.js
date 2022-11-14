import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './fonts/Roboto/Roboto-Regular.ttf';
import ModalProvider from 'mui-modal-provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ModalProvider>
        <App />
    </ModalProvider>
);

