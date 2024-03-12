import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";



const Root = () => {
    return (
        <div className="mx-auto max-w-7xl p-2">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;