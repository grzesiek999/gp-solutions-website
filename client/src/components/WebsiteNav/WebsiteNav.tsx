import {Link, useLocation} from "react-router-dom";
import styles from "./WebsiteNav.module.scss";
import Button from "../Button/Button.tsx";

const NAV_ITEMS = [
    { label: "Strona główna", path: "/" },
    { label: "Usługi", path: "/services" },
    { label: "O firmie", path: "/about_company" },
    { label: "Kontakt", path: "/contact" }
];

const WebsiteNavHeader = () => {
    const {pathname} = useLocation();

    const WhatsappButtonFunc = () =>{
        const phoneNumber = "48608158611";
        const message = encodeURIComponent("Dzień dobry, chciałbym zapytać o ofertę.");

        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    }

    return (
        <div className={styles.websiteLayoutNavContainer}>
            <nav>
                <ul>
                    {NAV_ITEMS.map((item) => (
                        <li>
                            <Link to={item.path} className={pathname === item.path ? `${styles.active}` : ""}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <Button
                onClick={WhatsappButtonFunc}
                type={'button'}
                className={styles.websiteLayoutWhatsappButton}
            >
                <div>
                    <img src='src/assets/icons/whatsapp-icon.png' alt="whatsapp-icon" />
                    <span className={''}>WhatsApp</span>
                </div>
            </Button>
        </div>
    )
}

const WebsiteNavFooter = () => {
    return (
        <div className={styles.footerNavContainerDiv}>
            <nav>
                <ul>
                    {NAV_ITEMS.map((item) => (
                        <li>
                            <Link to={item.path} className={``}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export {WebsiteNavHeader, WebsiteNavFooter};