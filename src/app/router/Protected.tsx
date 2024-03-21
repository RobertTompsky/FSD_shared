import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const Protected: React.FC = () => {
    const isAuthed = true
    return isAuthed
        ? <Outlet />
        : <Navigate to={'/'} replace />
};
