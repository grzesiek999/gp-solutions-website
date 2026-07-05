import {Link, useLocation} from "react-router-dom";
import styles from "./WebsiteNav.module.scss";

const NAV_ITEMS = [
    { label: "Strona główna", path: "/" },
    { label: "Usługi", path: "/services" },
    { label: "O firmie", path: "/about_company" },
    { label: "Kontakt", path: "/contact" }
];

const WebsiteNavHeader = () => {
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

const WebsiteNavFooter = () => {
    return (
        <div className={``}>
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