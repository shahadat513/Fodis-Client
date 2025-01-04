import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";
import { ThemeProvider } from "../ThemeProvider/ThemeProvider ";

const MainLayout = () => {
    return (
        <div>
            <ThemeProvider>
                <Navbar></Navbar>
                <div className="min-h-[calc(100vh-340px)]">
                    <Outlet></Outlet>
                </div >
                <Footer></Footer>
            </ThemeProvider>
        </div>
    );
}

export default MainLayout;
