import {NavLink} from "react-router-dom";
import styles from "./WebsiteNav.module.scss";

const NAV_ITEMS = [
    { label: "Strona główna", path: "/" },
    { label: "Usługi", path: "/services" },
    { label: "O nas", path: "/about_us" },
    { label: "Kontakt", path: "/contact" }
];

const SERVICES_NAV_ITEMS = [
    { label: "Strony internetowe", path: "/services/websites" },
    { label: "Dedykowane systemy", path: "/services/systems" },
    { label: "Automatyzacja", path: "/services/automation" },
    { label: "Integracje systemów", path: "/services/integration" },
    { label: "Opieka IT", path: "/services/itcare" },
    { label: "Cyberbezpieczeństwo", path: "/services/cybersecurity" },
    { label: "Ochrona danych", path: "/services/backups" },
    { label: "Szkolenia pracowników", path: "/services/education" },
]

type WebsiteNavHeaderProps = {
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ServicesList = (
    <div className={styles.servicesListDiv}>
        <ul>
            {SERVICES_NAV_ITEMS.map((item) => (
                <li key={item.path}>
                    <NavLink
                        to={item.path}
                        end={item.path === '/'}
                        className={({isActive}) => isActive ? styles.active : ""}
                    >{item.label}</NavLink>
                </li>
            ))}
        </ul>
    </div>
)

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
                            {item.path === '/services' && ServicesList}
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