import { Outlet } from "react-router-dom";
import NavBar from "../Components/Header/NavBar/NavBar";

const MainLayout = () => {
    return (
        <div className="">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;