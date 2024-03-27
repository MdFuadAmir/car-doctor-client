import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivetRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <span className="loading loading-spinner text-success"></span>
    }
    if(user?.email){
        return children;
    }

    return <Navigate to='/login' replace></Navigate>
};

export default PrivetRoutes;