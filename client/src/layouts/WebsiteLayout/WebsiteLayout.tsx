import {useState} from "react";
import {Outlet} from "react-router-dom";
import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import ScrollToTop from "../../hooks/ScrollToTop.tsx";
import styles from "./WebsiteLayout.module.scss";


const WebsiteLayout = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <ScrollToTop />
            <Header isOpen={isOpen} setOpen={setOpen}/>
            <main className={isOpen ? styles.isOpenMenu : styles.isCloseMenu}>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}

export default WebsiteLayout;