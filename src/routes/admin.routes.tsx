import { ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";

import CreateStudent from "../pages/admin/CreateStudent";
import { NavLink } from "react-router-dom";
import CreateFaculty from "../pages/admin/CreateFaculty";


export const adminPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <AdminDashboard />
    },
    {
        name: 'User Management',
        children: [
            {
                name: 'Create Admin',
                path: 'create-admin',
                element: <CreateAdmin />
            },
            {
                name: 'Create Faculty',
                path: 'create-faculty',
                element: <CreateFaculty />
            },
            {
                name: 'Create Student',
                path: 'create-student',
                element: <CreateStudent />
            },
        ]
    },

]
