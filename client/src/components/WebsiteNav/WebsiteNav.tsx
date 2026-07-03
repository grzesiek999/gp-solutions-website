import {Link, useLocation} from "react-router-dom";
import styles from "./WebsiteNav.module.scss";

const NAV_ITEMS = [
    { label: "Strona główna", path: "/" },
    { label: "Usługi", path: "/services" },
    { label: "O firmie", path: "/about_company" },
    { label: "Kontakt", path: "/contact" }
];

const WebsiteNav = () => {
    const {pathname} = useLocation();

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
        </div>
    )
}

export default WebsiteNav;