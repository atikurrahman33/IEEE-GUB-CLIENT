import { Outlet } from "react-router-dom";
import Footer from "../Shares/Footer/Footer";
import NavBar from "../Shares/NavBar/NavBar";

const Main = () => {
    return (
        <div className="">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            
            
        </div>
    );
};

export default Main;