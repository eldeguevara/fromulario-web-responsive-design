import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Default from '../pages/Default'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
    },
    {
        path: "/registro",
        element: <Register/>,
    },
    {
        path: "/*",
        element: <Default/>,
    },
])