import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Pages/Shared/Nav/Nav';
import Fotter from '../Pages/Shared/Fotter/Fotter';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default Main;