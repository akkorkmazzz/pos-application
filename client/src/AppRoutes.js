import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/homePage/HomePage';
import SANLayout from './SANLayout';
import CardPage from './pages/cardPage/CardPage';


const AppRoutes = () => {

    return (
        <Router>
            <Routes>
              <Route element={<SANLayout/>}>
                <Route path="/home" element={<HomePage/>} />
                <Route path="/card" element={<CardPage/>} />
              </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;