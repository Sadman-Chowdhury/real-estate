import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
const Root = () => {
    return (
        <div className="playfair max-w-full w-11/12 mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;