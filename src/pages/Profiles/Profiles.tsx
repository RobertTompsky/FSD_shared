import React from 'react';
import { Outlet } from 'react-router-dom';

export const Profiles: React.FC = () => {
    return (
        <div>
            PROFILES
            <Outlet />
        </div>
    );
};