import {NavLink} from "react-router-dom";
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

    return (
        <div className={styles.websiteLayoutNavContainer}>
            <nav>
                <ul>
                    {NAV_ITEMS.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                end={item.path === '/'}
                                onClick={()=>{if(setOpen) setOpen(false);}}
                                className={({isActive}) => isActive ? styles.active : ""}
                            >{item.label}</NavLink>
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
                        <li key={item.path}>
                            <NavLink to={item.path}>{item.label}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export {WebsiteNavHeader, WebsiteNavFooter};