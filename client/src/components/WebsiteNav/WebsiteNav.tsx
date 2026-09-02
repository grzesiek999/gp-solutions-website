import {Link, useLocation} from "react-router-dom";
import styles from "./WebsiteNav.module.scss";

const NAV_ITEMS = [
    { label: "Strona główna", path: "/" },
    { label: "Usługi", path: "/services" },
    { label: "O nas", path: "/about_us" },
    { label: "Kontakt", path: "/contact" }
];

type WebsiteNavHeaderProps = {
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const WebsiteNavHeader = ({ setOpen }: WebsiteNavHeaderProps) => {
    const {pathname} = useLocation();

    return (
        <div className={styles.websiteLayoutNavContainer}>
            <nav>
                <ul>
                    {NAV_ITEMS.map((item) => (
                        <li>
                            <Link
                                to={item.path}
                                onClick={()=>{if(setOpen)setOpen(false);}}
                                className={pathname === item.path ? `${styles.active}` : ""}
                            >{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
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