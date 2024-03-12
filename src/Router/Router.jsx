import {createBrowserRouter} from "react-router-dom";
import Home from "../Components/Home/Home";
import Root from "../Root/Root";
import Login from "../Components/Login/Login";
import SignIn from "../Components/SignIn/SignIn";

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
            
        ]
    }
])

export default router;