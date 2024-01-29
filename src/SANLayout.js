import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';

const SANLayout = () => {
    
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default SANLayout