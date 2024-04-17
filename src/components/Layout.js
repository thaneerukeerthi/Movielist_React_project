import React from 'react';
import Sidebar from './Sidebar';
import Home from './Home';
import Navbar from './Nav';

const Layout = () => {
    return (
        <div className="layout">
            <Navbar/>
            <Sidebar />
            <main>
                <Home/>
            </main>
        </div>
    );
};

export default Layout;
