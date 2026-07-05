import {Link} from "react-router-dom";
import {WebsiteNavHeader} from "../WebsiteNav/WebsiteNav.tsx";
import CompanyLogo from "../CompanyLogo/CompanyLogo.tsx";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header>
            <div className={`${styles.websiteLayoutHeaderDiv}`}>
                <Link to={'/'}><CompanyLogo className={styles.websiteLayoutLogo} path={`src/assets/icons/gp-solutions-blue.png`}/></Link>
                <WebsiteNavHeader />
            </div>
        </header>
    )
}

export default Header