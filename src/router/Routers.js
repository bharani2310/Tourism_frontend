import React from 'react';
import {Routes, Route ,Navigate} from 'react-router-dom';

import Home from './../pages/Home';
import Gallery from './../Gallery/Gallery';
import Tours from "./../pages/Tours";
import TourDetails from "./../pages/TourDetails"; 
import GenreImages from "./../Gallery/GenreImages"; 
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import SearchResultList from "./../pages/SearchResultList";
import ThankYou from './../pages/ThankYou'
import Dashboard from '../pages/Dashboard';
import AdminDashboard from '../pages/AdminDashboard';
// import UploadTable from '../Form/UploadTable';


const Routers = () => {
    const url='Tourism_frontend'
    return (
        <Routes>
            <Route path={`${url}/`} element={<Home />} />
            <Route path={`${url}/home`} element={<Home />} />
            <Route path={`${url}/gallery`} element={<Gallery />} />
            <Route path={`${url}/tours`} element={<Tours />} />
            <Route path={`${url}/tours/:id`} element={<TourDetails />} />
            <Route path={`${url}/gallery/:genre`} element={<GenreImages />} />
            {/* <Route path="/gallery/:id" element={<UploadTable />} /> */}
            <Route path={`${url}/login`} element={<Login />} />
            <Route path={`${url}/register`} element={<Register />} />
            <Route path={`${url}/thank-you`} element={<ThankYou />} />
            <Route path={`${url}/dashboard`} element={<Dashboard />} />
            <Route path={`${url}/admin-dashboard`} element={<AdminDashboard />} />
            <Route path={`${url}/tours/search`} element={<SearchResultList />} />
        </Routes>
    )
};

export default Routers;