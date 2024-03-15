import {createBrowserRouter} from "react-router-dom";
import Home from "../Components/Home/Home";
import Root from "../Root/Root";
import Login from "../Components/Login/Login";
import SignIn from "../Components/SignIn/SignIn";
import CheckOut from "../Components/CheckOut/CheckOut";
import BookService from "../Components/BookService/BookService";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/book/:id',
                element: <BookService></BookService>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <CheckOut></CheckOut>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
                
            }
            
        ]
    }
])

export default router;