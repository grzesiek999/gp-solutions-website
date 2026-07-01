import {Link} from "react-router-dom";


const NAV_ITEMS = [
    {
        label: "Strona główna",
        path: "/",
    },
    {
        label: "Usługi",
        path: "/services",
    },
    {
        label: "O firmie",
        path: "/about_company",
    },
    {
        label: "Kontakt",
        path: "/contact",
    }
];

const WebsiteNav = () => {
    return (
        <div className={`website-layout-nav-container`}>
            <nav>
                <ul>
                    {NAV_ITEMS.map((item) => (
                        <li>
                            <Link to={item.path}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default WebsiteNav;