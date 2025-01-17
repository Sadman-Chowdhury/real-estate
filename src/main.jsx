import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import { HelmetProvider } from 'react-helmet-async';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import AuthProvider from './providers/AuthProvider';
import LandDetails from './Components/LandDetails/LandDetails';
import PrivateRoute from './Components/routes/PrivateRoute';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import UserProfile from './Components/UserProfile/UserProfile';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile';
import Reviews from './Components/Reviews/Reviews';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element: <Home></Home>,
        loader:()=>fetch('/lands.json')
      },
      {
        path: '/landDetails/:id',
        element: <PrivateRoute><LandDetails></LandDetails></PrivateRoute>,
        loader:()=>fetch('/lands.json')
      },
      {
        path:"/register",
        element: <Register></Register>
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path:"/userProfile",
        element:<PrivateRoute><UserProfile></UserProfile></PrivateRoute>
      },
      {
        path:"/updateProfile",
        element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      },
      {
        path: "/reviews",
        element:<PrivateRoute><Reviews></Reviews></PrivateRoute>,
        loader:()=>fetch('/review.json')
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
