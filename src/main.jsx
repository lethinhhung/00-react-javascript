import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/global.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RegisterPage from './pages/register.jsx';
import LoginPage from './pages/login.jsx';
import { AuthWrapper } from './components/context/auth.context.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        // children: [
        //     {
        //         path: 'register',
        //         element: <RegisterPage />,
        //     },
        // ],
    },
    {
        path: 'register',
        element: <RegisterPage />,
    },
    {
        path: 'login',
        element: <LoginPage />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthWrapper>
            <RouterProvider router={router} />
        </AuthWrapper>
    </React.StrictMode>,
);
