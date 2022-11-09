import { createBrowserRouter } from "react-router-dom";
import AddServices from "../../components/AddServices/AddServices";
import Blog from "../../components/Blog/Blog";
import Error from "../../components/Error/Error";
import Home from "../../components/Home/Home/Home";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import ServicesDetails from "../../components/ServiceDetails/ServicesDetails";
import Services from "../../components/Services/Services";
import Main from "../../layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/services',
                element:<Services></Services>,
                loader: ()=>fetch('http://localhost:5000/services')
            },
            {
                path: '/services/:id',
                element:<PrivateRoute><ServicesDetails></ServicesDetails></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '*',
                element: <Error></Error>
            }
        ]
    }
]);

export default router;