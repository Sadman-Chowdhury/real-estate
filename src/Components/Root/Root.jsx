import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="playfair">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;