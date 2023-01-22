import React,{ Children, lazy, Suspense, useState } from "react";
import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from "../layouts/DashboardLayout";
import Artist from "../pages/Artist/Artist";
import Dashboard from "../pages/dashboard/dashboard";
import Login from "../pages/login/login";
import { useAppSelector } from "../redux/store/storehooks";


const Router = () => {

    const auth = useAppSelector((state) => state.auth)

    const myCustomRoute = auth.auth ? AuthenticatedRoutes() :  notAuthenticatedRoutes()

    return useRoutes(myCustomRoute);
    
}


const notAuthenticatedRoutes = () => {
    return(
        [
            {path: '',element: <Login />},
            {path: '/',element: <Login />},
            {path: '*',element: <Navigate to="/login" replace />,},
            {path: 'login',element: <Login />,},
        ]
    )
}

const AuthenticatedRoutes = () => {
    return(
        [
            {
              path: '/panel',   
              element: <DashboardLayout />,
              children: [
                { path: 'dashboard', element: <Dashboard /> },
                { 
                    path: 'artistdetail', 
                    element: <Artist /> ,
                    children: [
                        { path: ':artistId', element: <Artist /> },
                    ]
                },    
              ]
            },
            { path: '*', element: <Navigate to="/panel/dashboard" replace /> },
            { path: '/', element: <Navigate to="/panel/dashboard" replace /> },
            { path: '', element: <Navigate to="/panel/dashboard" replace /> }
        ]
    )
}

export default Router;