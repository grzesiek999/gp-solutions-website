import {Outlet} from "react-router-dom";
import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import ScrollToTop from "../../hooks/ScrollToTop.tsx";

const WebsiteLayout = () => {
    return (
        <>
            <ScrollToTop />
            <Header />
            <Outlet/>
            <Footer/>
        </>
    )
}

export default WebsiteLayout;